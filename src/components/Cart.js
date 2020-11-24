import ListCartItem from './ListCartItem';

const Cart = (props) => {
  const Items = props.cartItems.map((item) => {
    return (
      <div>
        <ListCartItem picture={item[0]} />
      </div>
    );
  });
  return <div>{Items}</div>;
};

export default Cart;
