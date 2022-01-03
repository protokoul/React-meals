import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import react from "react";
import React from "react";

const Meals = function (props) {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default Meals;
