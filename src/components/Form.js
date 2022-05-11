import React, { useState } from "react";

const Form = (props) => {
  const [newTask, setNewTask] = useState({ task: "none", completed: false });
  const handleOnChange = (taskValue) => {
    setNewTask({ task: taskValue.target.value, completed: false });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    return props.setTodo([...props.todo, newTask]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Enter a task" onChange={(e) => handleOnChange(e)} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default Form;
