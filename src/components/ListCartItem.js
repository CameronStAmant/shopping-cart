import './ListItem.css';

const ListCartItem = (props) => {
  const remove = () => {
    props.removeItem(props.index);
  };

  const editQuantity = (upOrDown) => {
    props.editQuantity(upOrDown, props.index);
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
        <p>
          Quantity: {props.amount} Cost: ${props.cost} Name: {props.name}
        </p>
        <p>Edit quantity</p>
        <button onClick={() => editQuantity('increase')}>Increase</button>
        <button onClick={() => editQuantity('decrease')}>Decrease</button>

        <button onClick={remove}>Remove</button>
      </div>
    </div>
  );
};

export default ListCartItem;

// add edit quantity buttons on cart page
