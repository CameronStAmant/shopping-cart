import './App.css';
import { Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import { useState } from 'react';

const App = () => {
  const [ShoppingCart, setShoppingCart] = useState(0);

  const add = (amount) => {
    setShoppingCart((ShoppingCart) => ShoppingCart + amount);
  };

  return (
    <div>
      <Navbar cart={ShoppingCart} />
      <Switch>
        <Route path="/shop">
          <Shop cart={ShoppingCart} addToCart={(amount) => add(amount)} />
        </Route>
        <Route path="/cart" component={Cart} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
