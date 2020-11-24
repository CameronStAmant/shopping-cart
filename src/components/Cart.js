import ListCartItem from './ListCartItem';
import './Cart.css';

const Cart = (props) => {
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
  return <div className="ListCartItems">{Items}</div>;
};

export default Cart;
