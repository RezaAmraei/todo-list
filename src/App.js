import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
function App() {
  const [todo, setTodo] = useState([
    { task: "Finish todo list", completed: false },
    { task: "do reading", completed: true },
  ]);
  return (
    <div className="App">
      {JSON.stringify(todo)}
      <hr />
      <Form setTodo={setTodo} todo={todo} />
      <List todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
