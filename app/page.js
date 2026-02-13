"use client";

import Todo from "./components/Todolist";
import InProgress from "./components/InProgress";
import Done from "./components/Done";
import AddTodo from "./components/AddTodo";
import { useState } from "react";
import AddToDoButton from "./components/AddTodoButton";

export default function Page() {
  const [addNew, setAddNew] = useState(false);

  return addNew ? (
    <div>
      <AddTodo addNew={addNew} setAddNew={setAddNew} />
    </div>
  ) : (
    <div className="p-10 bg-linear-to-r from-blue-100 from-20% to-blue-200 h-screen to-80%">
      <h1 className="text-2xl font-medium my-5">Your todo list</h1>

      <AddToDoButton setAddNew={setAddNew} />

      <div className="flex mt-5 justify-between gap-5 ">
        <div className="bg-white p-4 rounded w-1/3 h-[70vh] overflow-y-auto">
          <Todo />
        </div>

        <div className="bg-white p-4 rounded w-1/3 h-[70vh] overflow-y-auto">
          <InProgress />
        </div>
        <div className="bg-white p-4 rounded w-1/3 h-[70vh] overflow-y-auto">
          <Done />
        </div>
      </div>
    </div>
  );
}
