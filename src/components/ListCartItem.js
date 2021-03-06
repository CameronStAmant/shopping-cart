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
          {props.name} | ${props.cost}
          <button onClick={() => editQuantity('decrease')}>-</button>
          {props.amount}
          <button onClick={() => editQuantity('increase')}>+</button>
          <button onClick={remove}>Remove</button>
        </p>
      </div>
    </div>
  );
};

export default ListCartItem;
