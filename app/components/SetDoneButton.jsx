import React from "react";
import { ref, update } from "firebase/database";
import { db } from "@/firebaseconfig";

const SetDoneButton = ({ todo, id }) => {
  const changeStatusToDone = () => {
    const todoData = {
      title: todo.title,
      deadline: todo.deadline,
      description: todo.description,
      status: "done",
    };

    const updates = {};
    updates["todos/" + id] = todoData;

    return update(ref(db), updates);
  };
  return (
    <div>
      <button
        onClick={changeStatusToDone}
        className="p-2 bg-gray-400 text-black rounded-sm"
      >
        Done
      </button>
    </div>
  );
};

export default SetDoneButton;
