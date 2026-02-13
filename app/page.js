"use client";

import Todo from "./components/Todolist";
import InProgress from "./components/InProgress";
import Done from "./components/Done";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

export default function Page() {
  const [addNew, setAddNew] = useState(false);

  return addNew ? (
    <div>
      <AddTodo addNew={addNew} setAddNew={setAddNew} />
    </div>
  ) : (
    <div className="p-10 bg-gray-200 h-screen">
      <h1 className="text-2xl font-medium">Todo list</h1>

      <button
        className="p-3 bg-gray-400 rounded-xs text-black font-bold mt-2"
        onClick={() => setAddNew(true)}
      >
        Add new Todo item
      </button>

      <div className="flex mt-5 justify-between gap-5 ">
        <div className="bg-white p-4 rounded w-1/3 h-[70vh] overflow-y-auto">
          <Todo />
        </div>

        <div className="bg-white p-4 rounded shadow w-1/3 h-[70vh] overflow-y-auto">
          <InProgress />
        </div>
        <div className="bg-white p-4 rounded shadow w-1/3 h-[70vh] overflow-y-auto">
          <Done />
        </div>
      </div>
    </div>
  );
}
