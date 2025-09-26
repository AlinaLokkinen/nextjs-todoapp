import React from "react";

const TodoItem = ({ todo, id }) => {
  return (
    <div>
      <li>Title: {todo.title}</li>
      <li> Deadline: {todo.deadline}</li>
    </div>
  );
};

export default TodoItem;
