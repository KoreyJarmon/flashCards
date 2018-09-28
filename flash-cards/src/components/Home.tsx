import axios from "axios";
import * as React from "react";

// import styled from "styled-components";
// import { Link } from "react-router-dom";

export default class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
        cards:[],
        search: ""
    };
  }
  public async componentDidMount() {
    const res = await axios("http://localhost:8080/cards", {
      method: "get",
    });
    this.setState({
      cards: res.data
    });
  }

  public handleChange = (e: any) => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };


  public updateSearch(event:any){
      this.setState({search: event.target.value});
  }

  public render() {
    const filteredTerms = this.state.cards.filter(
        (card: any)=>{
            return card.term.indexOf(
                this.state.search)!==-1
        }
    )
    return (
        <div>
        <h1>Flash Cards</h1>
        <br />
        <input 
        id="search" 
        type="text"
        placeholder="search through terms"
        value={this.state.search}
        onChange={this.updateSearch.bind(this)}/>
        
        <div className="container" >
          <div className="row">
            <table className="table table-bordered table-dark">
              <thead>
                <tr>
                <th>Term</th>
                <th>Description</th>
                <th>Category</th>
                </tr>
              </thead>
              {filteredTerms.map((card: any) => (
                <tr
                  key={card.id}
                >
                 <td> {card.term} </td>
                  <td>{card.description}</td>
                  <td> {card.category} </td>
            
                </tr>
              ))}
              
            </table>
          </div>
        </div>
      </div>
    );
  }
}
