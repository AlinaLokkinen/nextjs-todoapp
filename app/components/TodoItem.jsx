import React, { useEffect } from "react";
import EditButton from "./EditButton";
import SetInProgressButton from "./SetInProgressButton";
import { Cedarville_Cursive } from "next/font/google";
import SetDoneButton from "./SetDoneButton";
import DeleteButton from "./DeleteButton";

const TodoItem = ({ todo, id }) => {
  const today = new Date();

  const calculateDaysBetween = () => {
    const start = new Date(today);
    const end = new Date(todo.deadline);

    const timeDiff = end - start;
    const dayDiff = timeDiff / (1000 * 3600 * 24);
    return dayDiff;
  };
  const dayDiff = calculateDaysBetween();

  return (
    <div>
      <ul
        className={
          dayDiff <= 0
            ? "bg-red-100 p-5 rounded"
            : dayDiff <= 7
              ? "bg-yellow-200 p-5 rounded"
              : "bg-green-200 p-5 rounded"
        }
      >
        <li>Title: {todo.title}</li>
        <li>Description: {todo.description}</li>
        <li> Deadline: {todo.deadline}</li>
        {todo.status === "todo" ? (
          <SetInProgressButton todo={todo} id={id} />
        ) : todo.status === "inProgress" ? (
          <SetDoneButton todo={todo} id={id} />
        ) : (
          <DeleteButton id={id} />
        )}
        <EditButton />
      </ul>
    </div>
  );
};

export default TodoItem;
