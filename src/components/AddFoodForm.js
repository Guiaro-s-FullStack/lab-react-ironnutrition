import { Divider, Input, Button, Radio } from 'antd';
import { useState } from "react"


function AddFoodForm({ addFood,toggleHide }) {
  const [food, setFood] = useState(
    {
      name: "",
      image: "",
      calories: null,
      servings: null
    })

  function handleInput(e) {
    let name = e.target.name
    let newFood = { ...food }
    newFood[name] = e.target.value

    setFood(newFood)
  }

  const handleSubmit = (e) => {
    addFood(food)
    setFood({
      name: "",
      image: "",
      calories: null,
      servings: null
    })
  }
  return (
    <>
      <form>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input name="name" value={food.name} type="text" onChange={handleInput} />

        <label>Image</label>
        <Input name="image" value={food.image} type="text" onChange={handleInput} />

        <label>Calories</label>
        <Input name="calories" value={food.calories} type="number" onChange={handleInput} />

        <label>Servings</label>
        <Input name="servings" value={food.servings} type="number" onChange={handleInput} />

        <Button type="primary" style={{ marginTop: 10 }} onClick={handleSubmit}>Create</Button>
      </form>
      <div>
      <Radio.Button value="large" style={{ marginTop: 10 }} onClick={toggleHide}>Hide Form</Radio.Button>
        </div>
    </>
  );
}

export default AddFoodForm;
