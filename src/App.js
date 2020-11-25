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

  const addCartItem = (item = null) => {
    // setShoppingCartItems((ShoppingCartItems) => {
    let newList = ShoppingCartItems;
    if (item !== null) {
      newList.push(item);
    }
    let counter = 0;
    for (let i = 0; i < newList.length; i++) {
      counter += newList[i][1];
    }
    setShoppingCart(counter);
    return newList;
    // });
  };

  const removeCartItem = (item) => {
    let newList = ShoppingCartItems;
    newList.splice(item, 1);
    addCartItem();
  };

  const editQuantity = (upOrDown, index) => {
    let newList = ShoppingCartItems;
    if (upOrDown === 'increase') {
      newList[index][1] += 1;
    } else if (upOrDown === 'decrease') {
      newList[index][1] -= 1;
    }
    addCartItem();
  };

  return (
    <div>
      <Navbar cartCount={ShoppingCart} />
      <Switch>
        <Route path="/shop">
          <Shop cartItems={(item) => addCartItem(item)} />
        </Route>
        <Route path="/cart">
          <Cart
            cartItems={ShoppingCartItems}
            removeItem={(item) => removeCartItem(item)}
            editQuantity={(upOrDown, index) => editQuantity(upOrDown, index)}
          />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
