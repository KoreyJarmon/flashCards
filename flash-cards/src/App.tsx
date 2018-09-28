import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import CreateCards from "./components/cards/CreateCards";
import Home from "./components/Home"
import Nav from "./components/navBar/Nav";



class App extends React.Component {
  public render() {
    return (
      <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/create" component={CreateCards} />
              
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
