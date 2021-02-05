import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Book from './components/Book';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import BookDetails from './components/BookDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Nav/>
        </div>
        <Switch>
          <Route exact path="/" component={Book} />
          <Route exact path="/book/add" component={AddBook} />
          <Route exact path="/book/edit/:id" component={EditBook} />
          <Route exact path="/book/details/:id" component={BookDetails} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
