import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./mealItem/mealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Waffle",
    description: "Finest and classic",
    price: 230,
  },
  {
    id: "m2",
    name: "Coffee",
    description: "A specialty!",
    price: 120,
  },
  {
    id: "m3",
    name: "Barbecue Burger set",
    description: "American, raw, meaty",
    price: 230,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy and green!",
    price: 180,
  },
];

const MealsAvailable = (props) => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default MealsAvailable;
