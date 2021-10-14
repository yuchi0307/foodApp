import { Fragment, useState } from "react";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';
function App() {
  
  const [cartIsShown, setCartIsShown]= useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  }

  const hideCartHandler = () =>{
    setCartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClick={hideCartHandler}/>}
      <Header onClick={showCartHandler}/>
      {/* 
      將控制state的function放入想要控制的component作為一個屬性，
      並逐漸往他的子層傳遞。這裡 Cart onClick 的onClick是我自己命名的屬性
      將hideCartHandler丟入onClick屬性
      子層則以 props.onClick 接收hideCartHandler
      */}
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
