import './App.css';
import Products from './Components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Components/cart/Cart";
import { useSelector } from 'react-redux';

function App() {
  const counter = useSelector(state => state.cart)
  // console.log(counter);
  return (
    <div className="App">
      <h1>Counter: {counter.title}</h1>
      <div>
        <Products />
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
}

export default App;
