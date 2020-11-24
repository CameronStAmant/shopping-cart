import ListItem from './ListItem';
import './Shop.css';

const Shop = (props) => {
  return (
    <div className="ListItems">
      <ListItem
        // cartCount={props.cartCount}
        // addToCart={props.addToCart}
        cartItems={props.cartItems}
      />
    </div>
  );
};

export default Shop;
