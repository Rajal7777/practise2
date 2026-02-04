import { useState } from "react";
import Header from "./compnents/Header";
import TaskInput from "./compnents/TaskInput";
import TaskList from "./compnents/TaskList";
import TaskItem from "./compnents/TaskItem";


function App() {
  const [todoList, setTodoList] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  //add user input to todo list
  function addTodos(addedTodo) {
    setTodoList(prev => [...prev, addedTodo]);
    setShowInput(false);
  }
  
  //delete todo item
  function handelDelete(taskID) {
    setTodoList(prev => prev.filter(task => task.id !== taskID));
   setSelectedTask(null);
   console.log(taskID);
   
  }

  //update todo 
  function handleUpdate(updatedTask) {
    setTodoList(prev => 
      prev.map(task => task.id === updatedTask.id ? updatedTask : task)
    );
    setSelectedTask(updatedTask);
  }

  return (
    <>
      <Header />
      {showInput && <TaskInput onAddTodo={addTodos} />}
      <button onClick={() => setShowInput(true)} style={{
        float: 'right',
        padding: '10px',
        marginLeft: '10px',
        backgroundColor: "rgb(55, 56, 58)",
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px'
      }}> + Add New Todo</button>
      {!selectedTask && !showInput  && <TaskList tasks={todoList} onSlectedTask={setSelectedTask} onDelete={handelDelete} />}
      {selectedTask &&  <TaskItem task={selectedTask} onDelete={handelDelete} onUpdate={handleUpdate} />}
    </>
  );
}

export default App;
