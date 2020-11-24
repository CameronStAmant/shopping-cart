import './App.css';
import { Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import { useState } from 'react';

const App = () => {
  const [ShoppingCart, setShoppingCart] = useState(0);
  const [ShoppingCartItems, setShoppingCartItems] = useState([]);

  // const addCartCount = (amount) => {
  //   setShoppingCart((ShoppingCart) => ShoppingCart + amount);
  // };

  const addCartItem = (item) => {
    setShoppingCartItems((ShoppingCartItems) => {
      let newList = ShoppingCartItems;
      newList.push(item);
      let counter = 0;
      for (let i = 0; i < newList.length; i++) {
        counter += newList[i][1];
      }
      setShoppingCart(counter);
      // console.log(counter);
      return newList;
    });
  };

  return (
    <div>
      <Navbar cartCount={ShoppingCart} />
      <Switch>
        <Route path="/shop">
          <Shop
            // cartCount={ShoppingCart}
            // addToCart={(amount) => addCartCount(amount)}
            cartItems={(item) => addCartItem(item)}
          />
        </Route>
        <Route path="/cart">
          <Cart cartCount={ShoppingCart} />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
