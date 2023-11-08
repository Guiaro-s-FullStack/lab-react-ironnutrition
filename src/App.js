import logo from './logo.svg';
import './App.css';
import { Button, Card } from "antd"
import foodsData from "./foods.json"
import { useState } from "react"
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import {Divider} from "antd"


function App() {
  const [foods, setFoods] = useState(foodsData)

  const addFood=(newFood)=>{
    let newFoods = [newFood,...foods]
    setFoods(newFoods)


  }
  

  return (
    <div className="App">
      <AddFoodForm addFood= {addFood}/>
      <Divider>Food List</Divider>
      <div className="food-list">
        {foods.map(food => {
          return <FoodBox food={{
            name: food.name,
            calories: food.calories,
            image: food.image,
            servings: food.servings,
          }}/>
        })}
        </div>
    </div>
  );
}

export default App;
