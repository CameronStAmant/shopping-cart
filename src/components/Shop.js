import ListItem from './ListItem';
import './Shop.css';

const Shop = (props) => {
  return (
    <div className="ListItems">
      <ListItem cartItems={props.cartItems} />
      <ListItem cartItems={props.cartItems} />
      <ListItem cartItems={props.cartItems} />
      <ListItem cartItems={props.cartItems} />
      <ListItem cartItems={props.cartItems} />
      <ListItem cartItems={props.cartItems} />
      <ListItem cartItems={props.cartItems} />
      <ListItem cartItems={props.cartItems} />
      <ListItem cartItems={props.cartItems} />
      <ListItem cartItems={props.cartItems} />
    </div>
  );
};

export default Shop;
