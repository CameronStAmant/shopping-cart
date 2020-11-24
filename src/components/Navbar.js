import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div className="nav">
      <img
        src="../images/logo.png"
        alt="paws in the shape of a heart"
        width="50px"
        height="50px"
      />
      <ul className="navItems">
        <Link to="/">
          <li>Home</li>
        </Link>
        {'|'}
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        {'|'}
        <Link to="/cart">
          <li>Cart</li>
          <li>{props.cart}</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
