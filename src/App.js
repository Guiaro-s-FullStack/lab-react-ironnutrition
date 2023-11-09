import logo from './logo.svg';
import './App.css';
import { Button, Card, Alert} from "antd"
import foodsData from "./foods.json"
import { useState } from "react"
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Divider } from "antd"
import Search from './components/Search';
import LoadFoodForm from './components/LoadFoodForm'



function App() {
  const [foods, setFoods] = useState(foodsData)
  const [listFoods, setListFoods] = useState([...foodsData])
  const [isHide, setIsHide] = useState(true)
  const [isEmpty, setIsEmpty] = useState(false)

  const addFood = (newFood) => {
    setListFoods([newFood, ...listFoods])
    setFoods(listFoods)


  }

  const toggleHide=()=>{
    if(isHide)setIsHide(false)
                else{
                    setIsHide(true)
                }
  }

  const searchFood = (text) => {
    let newFoods
    if (text === "") newFoods = [...listFoods]
    else {
      console.log(listFoods)
      newFoods = [...listFoods].filter(food => food.name.toLowerCase().includes(text.trim().toLowerCase()))
    }

    if(newFoods.length === 0) setIsEmpty(true)
    else{
      setIsEmpty(false)
  }
    setFoods(newFoods)
  }

  const deleteFood = (deletedFood) => {
    console.log(listFoods)
    setListFoods([...listFoods].filter(food => food.name !== deletedFood.name))
    let newFoods = [...foods].filter(food => food.name !== deletedFood.name)
    console.log(listFoods)
    setFoods(newFoods)
    console.log("excluido")

  }


  return (
    <div className="App">
      {isHide ? <LoadFoodForm toggleHide={toggleHide}/> : <AddFoodForm addFood={addFood} toggleHide={toggleHide} />}
      <Search searchFood={searchFood} />
      <Divider>Food List</Divider>
      <div className="food-list">
        { isEmpty ? <Alert message="Food didn't found" type="warning"/>: foods.map(food => {
          return <FoodBox 
          food={{
            name: food.name,
            calories: food.calories,
            image: food.image,
            servings: food.servings,
          }} 
          deleteFood={deleteFood} />
        })}
      </div>
    </div>
  );
}

export default App;
