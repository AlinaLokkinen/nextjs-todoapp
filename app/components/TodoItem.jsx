import React, { useEffect } from "react";
import EditButton from "./EditButton";
import SetInProgressButton from "./SetInProgressButton";
import { Cedarville_Cursive } from "next/font/google";

const TodoItem = ({ todo, id }) => {
  const today = new Date().toISOString().split("T")[0];

  const isToday = todo.deadline === today;

  console.log("----------");
  console.log("deadline: " + todo.deadline);
  console.log("today: " + today);

  return (
    <div>
      <ul className="">
        <li>Title: {todo.title}</li>
        <li>Description: {todo.description}</li>
        <li> Deadline: {todo.deadline}</li>
      </ul>
    </div>
  );
};

export default TodoItem;
