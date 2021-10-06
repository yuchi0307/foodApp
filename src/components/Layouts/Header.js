import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
const Header = (props) => {
  return (
    <Fragment>
      <Header>
        <h1>LovingMeals</h1>
        <button>cart</button>
      </Header>
      <div>
        <img src={mealsImage} alt="great melas waiting for you!!!"/>
      </div>
    </Fragment>
  );
};

export default Header;
