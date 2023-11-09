import { Divider, Input } from 'antd';
import {useState} from "react"

function Search({searchFood}) {
  const [text,setText]= useState("")

  const handleText=(e)=>{
    let newText = e.target.value.trim().toLowerCase()
    let text = e.target.value
    // let semiFormattedText = newText.toLowerCase()
    // let formattedText
    // for(let char of semiFormattedText){

    // }
    setText(text)
    searchFood(newText)
    console.log(newText)
  }
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={text} type="text" onChange={handleText} />
    </>
  );
}

export default Search;