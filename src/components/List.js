import React from "react";

const List = (props) => {
  const handleCheckBox = (e, box, i) => {
    // console.log(box);
    let copy = [...props.todo];
    copy[i].completed = e.target.checked;
    // console.log(copy[i]);
    // console.log(updatedTask);
    props.setTodo([...copy]);
    //props.setTodo([updatedTask]);
    // console.log(props.todo);
  };
  const handleDelete = (i) => {
    // console.log(i);
    // console.log(props.todo[0].task);
    const newTodo = props.todo.filter(
      (todoSingle) => todoSingle.task !== props.todo[i].task
    );
    // console.log(newTodo);
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
            onChange={(e) => handleCheckBox(e, task, i)}
            checked={task.completed}
          />
          <button onClick={(e) => handleDelete(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default List;
