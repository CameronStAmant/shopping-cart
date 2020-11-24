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
      </div>
    </div>
  );
};

export default ListCartItem;
