import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
  
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
  
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items]; //將原有、未整理數量的陣列攤開
        updatedItems[existingCartItemIndex] = updatedItem; 
        //將整理好數量的 updatedItem 複寫回原本的位置，成為新的 updatedItems
      } else {
        updatedItems = state.items.concat(action.item);
      }
  
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
  return defaultState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
