import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from 'react';

const MealItemForm = (props) => {
  const amountInputRef = useRef()
  const [isAmountValid, setisAmountValid] = useState(true);
  const submitHandler = event =>{
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === "" ||
    enteredAmountNumber < 1 || 
    enteredAmountNumber > 5)
    {
      setisAmountValid(false);
    }
    props.onAddToCart(enteredAmountNumber); 
    //將客戶點選的餐點資訊傳到購物車 
    //先傳到mealItem 隨著表單的數量還需要meaiItem的id price等資料一起丟入購物車
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef} 
        //注意這是客製化的component，無法直接使用ref，須到該組建中使用React.forwardRef
        label="Amount"
        input={{
          id: "amount_"+props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={["form button"]}>+ Add</button>
      {!isAmountValid && <p>Please entered a valid amount(1-5).</p>}
    </form>
  );
};

export default MealItemForm;
