"use client";

import Todo from "./components/Todolist";
import InProgress from "./components/InProgress";
import Done from "./components/Done";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

export default function Home() {
  const [addNew, setAddNew] = useState(false);

  return (
    <div className=" m-10 h-screen">
      <h1 className="text-2xl font-medium">Todo list</h1>

      <div className="flex mt-5 gap-50">
        <Todo />

        <InProgress />

        <Done />
      </div>

      <button
        className="p-3 bg-gray-400 rounded-xs text-black font-bold mt-15"
        onClick={() => setAddNew(true)}
      >
        Add new Todo item
      </button>
      {addNew && <AddTodo addNew={addNew} setAddNew={setAddNew} />}
    </div>
  );
}
