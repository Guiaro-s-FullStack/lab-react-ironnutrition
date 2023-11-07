import logo from './logo.svg';
import './App.css';
import { Button, Card } from "antd"
import foodsData from "./foods.json"
import { useState } from "react"
import FoodBox from './components/FoodBox';


function App() {
  const [foods, setFoods] = useState(foodsData)
  return (
    <div className="App">
      {foods.map(food => {
        return <FoodBox food={{
          name: food.name,
          calories: food.calories,
          image: food.image,
          servings: food.servings,
                }}/>
      })}
    </div>
  );
}

export default App;
