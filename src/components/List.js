import React from "react";

const List = (props) => {
  const handleCheckBox = (e, i) => {
    let copy = [...props.todo];
    copy[i].completed = e.target.checked;
    props.setTodo([...copy]);
  };
  const handleDelete = (i) => {
    const newTodo = props.todo.filter(
      (todoSingle) => todoSingle.task !== props.todo[i].task
    );
    props.setTodo(newTodo);
  };
  return (
    <div>
      {props.todo.map((task, i) => (
        <div key={i}>
          {task.completed == true ? (
            <h1 style={{ textDecoration: "line-through" }}>{task.task}</h1>
          ) : (
            <h1>{task.task}</h1>
          )}
          <input
            type="checkbox"
            onChange={(e) => handleCheckBox(e, i)}
            checked={task.completed}
          />
          <button onClick={(e) => handleDelete(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default List;
