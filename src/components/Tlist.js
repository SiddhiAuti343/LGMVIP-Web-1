import React,{useState} from "react";
import TODOFORMS from './TODOFORMS'
import TODO from './TODO'

export default function Tlist() {

//array to hold TODOS

const[todos,setTodos]=useState([]);


//if we want to add task
const addTask=task=>{
    if(!task.text){
        return
    }

   const newTodos=[task,...todos]; 
   setTodos(newTodos);

}

//remove the todo
const removeTask=id =>{
  let updatedTasks=[...todos].filter(task=> task.id!==id)
   setTodos(updatedTasks)
}


//if task is complete
const completedTask=id =>{
  let updatedTasks=todos.map(todo => {
    if(todo.id === id){
      todo.isComplete=true;
    }
    return todo;
  })
  setTodos(updatedTasks)
}


  return <div>
    <TODOFORMS addTask={addTask}></TODOFORMS>
    <TODO todos={todos} completedTask={completedTask} removeTask={removeTask}></TODO>
  </div>;
  
  
}

