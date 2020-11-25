import ListCartItem from './ListCartItem';
import './Cart.css';

const Cart = (props) => {
  let total = 0;

  const itemTotal = props.cartItems.map((item) => {
    total += item[1] * item[2];
    return total;
  });

  const Items = props.cartItems.map((item, index) => {
    return (
      <div key={index}>
        <ListCartItem
          picture={item[0]}
          amount={item[1]}
          cost={item[2]}
          name={item[3]}
          index={index}
          removeItem={props.removeItem}
          editQuantity={props.editQuantity}
        />
      </div>
    );
  });

  const checkout = () => {
    alert('Checkout was not implemented.');
  };
  return (
    <div id="total">
      Total: ${total} <button onClick={checkout}>Checkout</button>
      <div className="ListCartItems">{Items}</div>
    </div>
  );
};

export default Cart;
