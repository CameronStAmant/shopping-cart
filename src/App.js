import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Shop from './components/Shop';

const App = () => {
  return (
    <div>
      <div className="nav">
        <img
          src="../images/logo.png"
          alt="paws in the shape of a heart"
          width="50px"
          height="50px"
        />
        <ul className="navItems">
          <Link to="/">
            <li>Home</li>
          </Link>
          {'|'}
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          {'|'}
          <Link to="/cart">
            <li>Cart</li>
          </Link>
        </ul>
      </div>
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
