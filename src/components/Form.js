import React, { useState } from "react";

const Form = (props) => {
  const [newTask, setNewTask] = useState({ task: "none", completed: false });
  //let i = 0;
  const handleOnChange = (taskValue) => {
    setNewTask({ task: taskValue.target.value, completed: false });
    //console.log(newTask);
  };
  const handleSubmit = (taskValue) => {
    taskValue.preventDefault();
    //i++;
    return props.setTodo([...props.todo, newTask]);

    //console.log(i);
  };
  // console.log(props.todo);
  // console.log(i);
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter a task"
        onChange={(e) => handleOnChange(e)}
        // value={props.todo[i].task}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default Form;
