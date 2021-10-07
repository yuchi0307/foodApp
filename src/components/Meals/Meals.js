import { Fragment } from "react";
import MealsSummery from "./MealsSummery";
import MealsAvailable from "./MealsAvailable";

const Meals = () =>{
    return(
        <Fragment>
            <MealsSummery/>
            <MealsAvailable/>
        </Fragment>
        
    )
}

export default Meals;