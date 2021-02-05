import React, { Component } from 'react';
import List from "./Components/List";
import Binding from "./Components/Binding";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Fetching_axios from './Components/Fetching_axios';
import './App.css';

class App extends Component  {
  render () {
    return(
      // <Router>
      //   <div className="App">
      //   <Nav />
      //   <Switch>
      //     <Route path="/" exact component={Home} />
      //     <Route path="/list" component={List} />
      //     <Route path="/binding" component={Binding} />
      //   </Switch>  
      //   </div>
      // </Router>
      // <Fetching_axios />
      <div id="page">
        <h1>Heading Title</h1>
        <h2>Subheading Title</h2>
        <h2>Subheading Title</h2>
        <h1>Heading Title</h1>
        <h2>Subheading Title</h2>
        <h1>Heading Title</h1>
      </div>

    )   
  }
}

export default App;
