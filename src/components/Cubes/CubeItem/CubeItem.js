import { useContext } from 'react';

import classes from './CubeItem.module.css';
import CubeItemForm from './CubeItemForm';
import CartContext from '../../../store/cart-context';

const CubeItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `₹ ${props.price.toFixed(0)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.cube}>
      <img src={props.image} alt="Cube" />
      <h3>{props.name}</h3>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
      <CubeItemForm id={props.id} onAddToCart={addToCartHandler}></CubeItemForm>
    </li>
  );
};

export default CubeItem;
