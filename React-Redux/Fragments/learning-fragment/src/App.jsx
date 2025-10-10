import FoodItem from "./components/FoodItem"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";

function App() {
 // let foodItem = [];
  let foodItem = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Food </h1>{}
     <FoodItem items={foodItem}></FoodItem>
     <ErrorMessage items={foodItem}></ErrorMessage>
    </Container>   
    
    <Container>
     <p>Lorem ipsum dolor sit amet.</p>

    </Container>
    </>

  );
}

export default App;
