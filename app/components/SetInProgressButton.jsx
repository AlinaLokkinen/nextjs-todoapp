'use client'
import React from "react";
import { db } from "@/firebaseconfig";
import { ref, child, push, update } from "firebase/database";

const SetInProgressButton = ({ todo, id }) => {
  const changeStatusToInProgress = () => {
    const todoData = {
      title: todo.title,
      deadline: todo.deadline,
      status: "inProgress",
    };

    const updates = {};
    updates['todos/' + id] = todoData;

    return update(ref(db), updates);
  };

  return (
    <div>
      <button onClick={changeStatusToInProgress} className="p-2 bg-gray-400 text-black rounded-sm">Start</button>
    </div>
  );
};

export default SetInProgressButton;
