import React from "react";
import { NavLink } from "react-router-dom";

const Maincard = ({ detail }) => {
  //   console.log(detail);

  return (
    <div className="meals">
      {!detail
        ? ""
        : detail.map((Items) => {
            return (
              <div className="mealImg" key={Items.idMeal}>
                <img src={Items.strMealThumb} alt={Items.strMeal} />
                <p>{Items.strMeal}</p>
                <NavLink to={`/${Items.strMeal}`}>
                  <button>Recipe</button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
};

export default Maincard;
