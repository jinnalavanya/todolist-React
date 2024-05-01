import React, { useState } from 'react'
import './todoList.css';

const TodoList = () => {
    const[tasks, setTasks] =  useState([])
    const [inputValue, setInputValue] = useState("");
    const [showCompleted, setShowCompleted] = useState(false)
    const [showIncompleted, setShowIncompleted] = useState(true)
    const [showDeleted, setShowDeleted] = useState(false)
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    };
    const handleAddtask= () => {
     if(inputValue.trim()!== '') {
        setTasks([...tasks, {text:inputValue, completed: false, deleted: false}])
        setInputValue("")
     } 
    }
    const handleToggleComplete=(index)=> {
        const newTasks = [...tasks]
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks)
    }
    const handleToggleDelete=(index)=> {
        const newTasks = [...tasks]
        newTasks[index].deleted = !newTasks[index].deleted;
        setTasks(newTasks)
    }
    const toggleShowCompleted = ()=> {
        setShowCompleted(!showCompleted)
    }
    const toggleShowIncompleted = ()=> {
        setShowIncompleted(!showIncompleted)
    }

    const toggleShowDeleted = ()=> {
        setShowDeleted(!showDeleted)
    }
  
  return (
    <div className='todo-container'>
        <h1>TodoList</h1>
        <img src='https://www.shutterstock.com/shutterstock/photos/384639760/display_1500/stock-photo-coffee-cup-and-notebook-with-to-do-list-on-blue-rustic-desk-from-above-planning-and-design-concept-384639760.jpg' alt='' width="100%" />
   <div className='input-container'>
    <input type='text' value={inputValue} onChange={handleInputChange} placeholder='Add a new task' className='task-input' />
  <button onClick={handleAddtask} className='add-button'>Add Task</button>
   </div>
   <div className='toggle-buttons'>
    <button onClick={toggleShowIncompleted} className={`toggle-button ${showIncompleted ? 'active' : ''}`}>Incompleted</button>
    <button onClick={toggleShowCompleted} className={`toggle-button ${showCompleted ? 'active' : ''}`}>completed</button>
    <button onClick={toggleShowDeleted} className={`toggle-button ${showDeleted ? 'active' : ''}`}>Deleted</button>


   </div>
   <div className='container'>
    <div className='task-container'>
        <ul className='task-list'>
            {tasks.map((task,index)=> (
              ((!task.completed && showIncompleted) ||  (task.completed && showCompleted)|| (task.deleted && showDeleted)) && (
   <li key={index} className={`task-item ${task.completed ? 'completed' : ''} ${task.deleted ? 'deleted': ''}`}>
   <span className='task-text'>{task.text}</span>
   <div className='button-container'>
    {!task.deleted && (
        <button onClick={()=> handleToggleComplete(index)} className='complete-button'>
        {task.completed ? 'incompleted' : 'completed'}

        
        </button>



        )}

        <button onClick={()=> handleToggleDelete(index)} className='delete-button'>
        {task.deleted ? 'Restore' : 'Delete'}

        </button>

    
   </div>

   </li>
              )
            ))}
        </ul>
    </div>
   </div>
    </div>
  )
}

export default TodoList