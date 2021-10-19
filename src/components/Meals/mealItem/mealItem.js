import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';


const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = amount =>{
      cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
    //在CartContext中，有addItem的 function，
    //要接收參數item，這裡把id, name. amount. price包成物件做參數丟進ㄑ
  }
  return (
    <li className={classes.meal}>
      <div>
      <h3 >{props.name}</h3>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{props.price}</div>
      </div> 
      <div><MealItemForm onAddToCart={addToCartHandler}/></div>
   </li>
  );
};

export default MealItem;
