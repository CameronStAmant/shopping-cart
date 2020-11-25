import ListItem from './ListItem';
import './Shop.css';

const Shop = (props) => {
  return (
    <div className="ListItems">
      <ListItem shopItems={props.shopItems} />
      <ListItem shopItems={props.shopItems} />
      <ListItem shopItems={props.shopItems} />
      <ListItem shopItems={props.shopItems} />
      <ListItem shopItems={props.shopItems} />
      <ListItem shopItems={props.shopItems} />
      <ListItem shopItems={props.shopItems} />
      <ListItem shopItems={props.shopItems} />
      <ListItem shopItems={props.shopItems} />
      <ListItem shopItems={props.shopItems} />
    </div>
  );
};

export default Shop;
