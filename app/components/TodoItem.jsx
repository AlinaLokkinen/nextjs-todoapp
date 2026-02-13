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
      <ul className="flex gap-4">
        <div className="self-center">
          {dayDiff <= 0 && todo.status != "done" ? (
            <img className="max-h-10" src="./red.svg" alt="red calendar icon" />
          ) : dayDiff <= 7 && todo.status != "done" ? (
            <img
              className="max-h-10"
              src="./yellow.svg"
              alt="red calendar icon"
            />
          ) : 
            todo.status != "done" ? (
              <img
                className="max-h-10"
                src="./green.svg"
                alt="green calendar icon"
              />
            
          ) : (
            <img
                className="max-h-10"
                src="./done.svg"
                alt="g"
              />)}
        </div>
        <div className="flex flex-col gap-2 shadow-md rounded-md w-full p-4">
          <li>Title: {todo.title}</li>
          <li>Description: {todo.description}</li>
          <li> Deadline: {todo.deadline}</li>
          <div className="flex gap-3">
            {todo.status === "todo" && (
              <SetInProgressButton todo={todo} id={id} />
            )}

            {todo.status === "inProgress" && (
              <SetDoneButton todo={todo} id={id} />
            )}
            <EditButton />
            <DeleteButton id={id} />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default TodoItem;
