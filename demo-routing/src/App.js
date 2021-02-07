import React, { Component} from 'react';
import List from "./Components/List";
import Binding from "./Components/Binding";
import Nav from "./Components/Nav";
import Home from "./Components/useEffectExample/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Fetching_axios from './Components/Fetching_axios';
import Conditional from './Components/useEffectExample/Conditional';
import CursorPosition from './Components/useEffectExample/CursorPosition';
import ContextProvider from './Components/useContextExample/ContextProvider';
import Main from './Components/useCallbackExample/Main';
import MainuseRef from './Components/useRefExample/MainuseRef';
import MainuseReducer from './Components/useReducerExample/MainuseReducer';
// import './App.css';

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

      // <div id="page">
      //   <h1>Heading Title</h1>
      //   <h2>Subheading Title</h2>
      //   <h2>Subheading Title</h2>
      //   <h1>Heading Title</h1>
      //   <h2>Subheading Title</h2>
      //   <h1>Heading Title</h1>
      // </div>

      //Toggle Coponent
      // <Conditional />

      //To avoid prop drilling
    //  <ContextProvider />

    //For useCallback hook
    // <Main />

    //For useRef hook
    // <MainuseRef />

    //For useReducer hook
    <MainuseReducer />
    )   
  }
}

export default App;
