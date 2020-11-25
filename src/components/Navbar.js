import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  return (
    <div className="nav">
      <img
        id="navLogo"
        src="../images/logo.png"
        alt="paws in the shape of a heart"
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
          <li>Cart {props.cartCount}</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
