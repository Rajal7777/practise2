import { useRef, useState, useId } from "react";



export default function TaskInput({ onAddTodo }) {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef();
  const id = useId();


  //input value
  function onChange(e) {
    e.preventDefault();
    if (e.target.name == "text") {
      setInputText({ ...inputText, text: e.target.value });
    } else {
      setInputText({ ...inputText, description: e.target.value });
    }
  }


  const todo = {
    id: id,
    text: inputText.text,
    description: inputText.description,
    completed: false,
  };


  //add todo and send new todo to App.jsx
  function handelAddTodo() {
    inputRef.current.focus();
    if (inputText.text?.trim() === "") return;
    onAddTodo(todo);
    setInputText("");
    console.log(todo);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "500px",
        alignItems: "center",
        margin: "20px auto",
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <input
        style={{
          marginTop: "10px",
          padding: "10px",
          minWidth: "300px",
        }}
        type="text"
        name="text"
        placeholder="Enter a task"
        value={inputText.text || ""}
        onChange={onChange}
        ref={inputRef}
      />
      <textarea
        style={{
          padding: "10px",
          minWidth: "300px",
        }}
        type="text"
        name="description"
        placeholder="Enter a task description"
        value={inputText.description || ""}
        onChange={onChange}
        ref={inputRef}
      />
      <button
        onClick={handelAddTodo}
        style={{
          padding: "10px",
          marginLeft: "10px",
          backgroundColor: "rgb(211, 217, 227)",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Add Task
      </button>
    </div>
  );
}
