import React, {useState} from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import classes from './Navbar.module.css';
import Logo from '../../assets/cubeLogo.jpg';
import HeaderCartButton from './HeaderCartButton';

const Navbar = (props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick((prevState) => {
    return !prevState;
  });

  return (
    <div className={classes.navbar}>
      <div className={classes.hamburger} onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: '#f8f8f8' }} />
        ) : (
          <FaBars size={30} style={{ color: '#f8f8f8' }} />
        )}
      </div>
      <div className={classes.logo}>
        <img src={Logo} alt="logo" />
        <h1>CubeCart</h1>
      </div>
      <ul className={click ? `${classes['nav-menu']} ${classes.active} }` : classes['nav-menu']}>
        <li className={classes["nav-item"]}>
          <a href="#buy-cubes">Cubes</a>
        </li>
        <li className={classes["nav-item"]}>
          <a href="/">About</a>
        </li>
        <li className={classes["nav-item"]}>
          <a href="/">Survey Form</a>
        </li>
        <li className={classes["nav-item"]}>
          <a href="/">Contact</a>
        </li>
      </ul>
      <HeaderCartButton onClick={props.onShowCart} />
    </div>
  );
};

export default Navbar;
