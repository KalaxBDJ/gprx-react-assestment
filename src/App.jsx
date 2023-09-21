import React, { useState } from "react";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Clean the house", completed: false }
  ]);

  const [taskText, setTaskText] = useState('');

  const completeTask = (element) => {
    let newTasksArray = [...tasks];

    newTasksArray.map( (task) => {
      if(task.id === element.id) {
        task.completed = !task.completed
        task.text = element.text
      }
      return task
    } )

    setTasks(newTasksArray);
  }

  const addTask = () => {
    if(taskText.trim() === '') return 

    const newTask = {
      id : 3,
      text : taskText,
      completed : false
    };

    setTasks([...tasks,newTask]);
  }

  return (
    <div>
      <input onChange={(e) => {
        setTaskText(e.target.value);
      }}  placeholder="Code, Take a shower ..." name="taskText"/>
      <button onClick={ addTask }>Add Task</button>
      <TaskList tasks={tasks} completeTask={completeTask}/>
    </div>
  );
};

export default App;
