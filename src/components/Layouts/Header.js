import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css"
const Header = (props) => {
  return (
    <Fragment>
      <Header className={classes.header}>
        <h1>LovingMeals</h1>
        <button>cart</button>
      </Header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="great melas waiting for you!!!"/>
      </div>
    </Fragment>
  );
};

export default Header;
