import * as React from 'react';


export default class CreateCards extends React.Component <any>{

  constructor(props:any){
    super(props)
    this.state={
        category:"",
        description:"",
        term:""
    }
  }
  public changes = (e: any) => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  public createCard=(event:any)=> {
    event.preventDefault();
  
    fetch('http://localhost:8080/cards', {
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
    })
    .then(resp => resp.json())
    .then(resp => {
       this.props.history.push('/');
    })
    .catch(err => {
      console.log(err);
    });
  }
  public render() {
    return (
      <div className="container" id="content-container">
        <div className="row justify-content-center">
          <form className="form-create-movie col-xs-12 col-sm-10 col-md-8 col-lg-6" onSubmit={this.createCard}>
            <h1>New Flash Card</h1>
            <br/>
            <label htmlFor="input-amount" className="sr-only">Term</label>
            <input onChange={this.changes} name="term" type="text" className="form-control" placeholder="Term" />
            <br />

            <label htmlFor="input-description" className="sr-only">Description</label>
            <input onChange={this.changes} name="description" type="text"  className="form-control" placeholder="Description" />
            <br />

            <label htmlFor="input-reimbursement-type" className="sr-only">Category</label>
            <input onChange={this.changes} name="category" type="text" className="form-control" placeholder="Category" />
            <br />
            <div className="container">
              <div className="row justify-content-center">
                <button id="create-button" type="submit">Create</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}