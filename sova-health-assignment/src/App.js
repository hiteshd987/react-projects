import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'; 
import Nav from './components/Navigation/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
