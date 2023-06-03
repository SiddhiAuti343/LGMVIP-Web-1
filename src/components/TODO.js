import React from 'react';
import { RiCloseCircleFill } from 'react-icons/ri'
import{ TiTickOutline } from 'react-icons/ti'


export default function TODO({todos,completedTask,removeTask}) {

  return todos.map((todo,index)=>(
    <div className={todo.isComplete ? 'complete task-div':'task-div'} key={index}>
        <div className="todo-text">{todo.text}</div>
        <div className="icons" key={todo.id}>
        <TiTickOutline  className='tik'onClick={() =>{ completedTask(todo.id)}}></TiTickOutline>
        <RiCloseCircleFill className='ric' onClick={()=>{removeTask(todo.id)}}></RiCloseCircleFill>
    </div>
    </div>

  ))
}
