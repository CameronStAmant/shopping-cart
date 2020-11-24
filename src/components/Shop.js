import ListItem from './ListItem';
import './Shop.css';

const Shop = (props) => {
  return (
    <div className="ListItems">
      <ListItem cart={props.cart} addToCart={props.addToCart} />
    </div>
  );
};

export default Shop;
