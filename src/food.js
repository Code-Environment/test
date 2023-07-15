import React, { useEffect, useState } from "react";
import "./App.css";
import "./food.css";
import "./text.css";

import { data } from "./Data";

function Food() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    setMeals(data);
  }, []);

  const [mealArray, setMealArray] = useState([]);
  const [hide, setHide] = useState(false);

  const handleclick = (meal) => {
    const newMeal = mealArray.find((m) => m.id === meal.id);

    if (newMeal) {
      return alert("Meal already exists on cart");
    }
    setMealArray([...mealArray, meal]);
  };

  console.log(mealArray);

  const Result = (props) => {
    return (
      <div className="itempucharse">
        <img
          className="reserve-meals"
          src={`./img/${props.img}`}
          alt={props.name}
        />
      </div>
    );
  };

  const Toggle = () => {
    return (
      <div className="toggle">
        <nav>
          <div className="inside-navbar">
            <span>Home</span> <span>About Us</span> <span>Contact Us</span>
          </div>
          <div className="hide" onClick={setting}>
            X
            {hide
              ? mealArray.map((item) => (
                  <Result key={item.url} img={item.url} />
                ))
              : null}
          </div>
        </nav>
      </div>
    );
  };

  const setting = () => {
    setHide(!hide);
  };

  const mapping = meals.map((data) => {
    return (
      <div className="food" key={data.id}>
        <div className="container1">
          <img src={`./img/${data.url}`} alt={data.text1} />
          <p className="name">{data.text1}</p>
          <button onClick={() => handleclick(data)} className="buy">
            {data.text}
          </button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Toggle />
      {mapping}
    </div>
  );
}

export default Food;
