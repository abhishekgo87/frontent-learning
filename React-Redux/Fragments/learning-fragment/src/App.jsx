import FoodItem from "./components/FoodItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItem = [];

  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food </h1>
        <FoodInput handleKeyChange={onKeyDown}></FoodInput>
       <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItem items={foodItems}></FoodItem>
     </Container>

      {/* <Container>
        <p>Lorem ipsum dolor sit amet.</p>
      </Container> */}
    </>
  );
}

export default App;
