import classes from "./Cart.module.css";
import Modal from '../UI/Modal';
const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "suhsi", amount: "2", price: "100" }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onClick}>
      {cartItems}
      <div className={classes.total}>
          <span>Total Amount</span>
          <span>100</span>
      </div>
      <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClick}>Close</button>
          <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
