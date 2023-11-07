import logo from './logo.svg';
import './App.css';
import { Button, Card } from "antd"
import foodsData from "./foods.json"
import { useState } from "react"

function App() {
  const [foods, setFoods] = useState(foodsData)
  return (
    <div className="App">
      {foods.map(food => {
        return (<div>
          <p>{food.name}</p>
          <img  src={food.image} width={140}/>
        </div>
        )
      })}
    </div>
  );
}

export default App;
