import ListCartItem from './ListCartItem';
import './Cart.css';

const Cart = (props) => {
  let total = 0;

  const itemTotal = props.cartItems.map((item) => {
    total += item[1] * item[2];
    return total;
  });

  const Items = props.cartItems.map((item) => {
    return (
      <div>
        <ListCartItem
          picture={item[0]}
          amount={item[1]}
          cost={item[2]}
          name={item[3]}
        />
      </div>
    );
  });
  return (
    <div className="ListCartItems">
      <div>Total: ${total}</div>
      {Items}
    </div>
  );
};

export default Cart;
