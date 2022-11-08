import { Fragment } from 'react';
import banner from '../../assets/Banner.webp';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>CubeCart</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <h1>
          India <span className={classes.word}>Largest</span> Puzzle Store
        </h1>
        <p>Get your first puzzle</p>
        <button>Order Now</button>
        <img src={banner} alt="cube banner" />
      </div>
    </Fragment>
  );
};

export default Header;
