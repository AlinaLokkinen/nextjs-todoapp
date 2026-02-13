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
    <div className=" h-screen flex justify-center items-center">
      <form className="flex flex-col " onSubmit={handleSubmit}>
        <label className="py-4 text-2xl">
          Title:{" "}
          <input
            className="border-b"
            type="text"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
        </label>
        <label className="py-4 text-2xl">
          Description:{" "}
          <input
            className="border-b"
            type="text"
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
        </label>
        <label className="py-4 text-2xl">
          Deadline:{" "}
          <input
            className="border-b px-4"
            type="date"
            value={todo.deadline}
            
            onChange={(e) => setTodo({ ...todo, deadline: e.target.value })}
          />
        </label>
        <div className="flex gap-3 mt-5">
          <button
            className="p-2 bg-blue-200 rounded-sm text-black"
            type="submit"
          >
            Add
          </button>
          <button
            className="p-2 bg-blue-200 rounded-sm text-black"
            type="reset"
          >
            Reset
          </button>
          <button
            className="p-2 bg-red-200 rounded-sm text-black"
            onClick={() => setAddNew(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
