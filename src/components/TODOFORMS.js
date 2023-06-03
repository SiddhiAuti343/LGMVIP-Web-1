import React,{useState} from "react";

export default function TODOFORMS(props) {

   const [input,setInput]=useState("");

    const handleChange= e =>{
        setInput(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();//data will remain on page itself after reload
        props.addTask({
            id:Math.floor(Math.random()*100),
            text:input,
            isComplete:false
        })
           setInput('')
    }

  return (
    <form className="tform">
        <input type="text" placeholder='Please enter a new TODO'  onChange={handleChange}  className="todo-input" value={input} name="text"/>
        <button type="SUBMIT" onClick={handleSubmit} className="todobutton">ADD YOUR TODO</button>
    </form>
  );
}
