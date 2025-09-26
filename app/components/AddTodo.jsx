"use client";
import React, { useState } from "react";
import { db } from "@/firebaseconfig";
import { ref, set, push } from "firebase/database";

const AddTodo = ({ addNew, setAddNew }) => {
  const [todo, setTodo] = useState({
    title: "",
    deadline: new Date().toLocaleTimeString(),
    status: "todo",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const todosRef = ref(db, "todos");
    const newTodoRef = push(todosRef);
    set(newTodoRef, {
      title: todo.title,
      deadline: todo.deadline,
      status: todo.status,
    });

    setTodo({
      title: "",
      deadline: new Date().toLocaleTimeString,
      status: "todo",
    });

    setAddNew(false);
  };

  return (
    <div className="">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="py-4">
          Title:{" "}
          <input
            type="text"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
        </label>
        <label className="py-4">
          Deadline:{" "}
          <input
            type="date"
            value={todo.deadline}
            className="dark:[color-scheme:dark]"
            onChange={(e) => setTodo({ ...todo, deadline: e.target.value })}
          />
        </label>
        <div className="flex gap-2">
          <button className="p-2 bg-gray-400 rounded-sm text-black font-bold" type="submit">Add</button>
          <button className="p-2 bg-gray-400 rounded-sm text-black font-bold" type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
