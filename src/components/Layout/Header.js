import { Fragment } from 'react';
import banner from '../../assets/Banner.webp';
import classes from './Header.module.css';
import Navbar from './Navbar';


const Header = (props) => {
  return (
    <Fragment>
      <header >
        <Navbar onShowCart={props.onShowCart}></Navbar>  
      </header>
      <div className={classes['main-image']}>
        <h1>
          India <span className={classes.word}>Largest</span> Puzzle Store
        </h1>
        <p>Get your first puzzle</p>
        <a href='#buy-cubes'><button>Order Now</button></a>
        <img src={banner} alt="cube banner" />
      </div>
    </Fragment>
  );
};

export default Header;
