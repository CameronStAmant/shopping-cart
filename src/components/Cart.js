import ListCartItem from './ListCartItem';
import './Cart.css';

const Cart = (props) => {
  const Items = props.cartItems.map((item) => {
    return (
      <div>
        <ListCartItem picture={item[0]} />
      </div>
    );
  });
  return <div className="ListCartItems">{Items}</div>;
};

export default Cart;
