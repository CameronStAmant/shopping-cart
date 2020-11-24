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

  const addCartItem = (item) => {
    // setShoppingCartItems((ShoppingCartItems) => {
    let newList = ShoppingCartItems;
    newList.push(item);
    let counter = 0;
    for (let i = 0; i < newList.length; i++) {
      counter += newList[i][1];
    }
    console.log(`this is newList: ${newList}`);
    setShoppingCart(counter);
    // console.log(newList);
    return newList;
    // });
  };

  return (
    <div>
      <Navbar cartCount={ShoppingCart} />
      <Switch>
        <Route path="/shop">
          <Shop cartItems={(item) => addCartItem(item)} />
        </Route>
        <Route path="/cart">
          <Cart cartItems={ShoppingCartItems} />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
