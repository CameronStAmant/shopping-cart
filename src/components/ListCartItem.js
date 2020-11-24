import './ListItem.css';

const ListCartItem = (props) => {
  return (
    <div>
      <div className="ListItem">
        <img
          src={props.picture.message}
          alt="dog"
          height="300px"
          width="300px"
        />
        <p>Quantity: {props.amount}</p>
        <p>Cost: ${props.cost}</p>
        <p>Name: {props.name}</p>
      </div>
    </div>
  );
};

export default ListCartItem;
