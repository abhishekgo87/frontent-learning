import FoodItem from "./components/FoodItem"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";

function App() {
 // let foodItem = [];
  let foodItem = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      <h1 className="food-heading">Healthy Food </h1>{}
     <FoodItem items={foodItem}></FoodItem>
     <ErrorMessage items={foodItem}></ErrorMessage>
    </>
  );
}

export default App;
