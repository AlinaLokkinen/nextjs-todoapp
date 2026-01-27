"use client";
import React, { useState } from "react";
import { db } from "@/firebaseconfig";
import { ref, set, push } from "firebase/database";

const AddTodo = ({ addNew, setAddNew }) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    deadline: new Date().toLocaleDateString(),
    status: "todo",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const todosRef = ref(db, "todos");
    const newTodoRef = push(todosRef);
    console.log(todo.deadline);
    set(newTodoRef, {
      title: todo.title,
      description: todo.description,
      deadline: todo.deadline,
      status: todo.status,
    });

    setTodo({
      title: "",
      description: "",
      deadline: new Date().toLocaleDateString(),
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
          Description:{" "}
          <input
            type="text"
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
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
          <button
            className="p-2 bg-gray-400 rounded-sm text-black font-bold"
            type="submit"
          >
            Add
          </button>
          <button
            className="p-2 bg-gray-400 rounded-sm text-black font-bold"
            type="reset"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
