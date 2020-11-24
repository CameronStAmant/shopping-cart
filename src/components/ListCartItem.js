import './ListItem.css';

const ListCartItem = (props) => {
  const remove = () => {
    props.removeItem(props.index);
  };

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
        <button onClick={remove}>Remove</button>
      </div>
    </div>
  );
};

export default ListCartItem;
