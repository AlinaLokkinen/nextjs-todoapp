import React from "react";
import TodoItem from "./TodoItem";
import {
  ref,
  set,
  onValue,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";
import { db } from "@/firebaseconfig";
import { useEffect, useState } from "react";
import SetInProgressButton from "./SetInProgressButton";
import EditButton from "./EditButton";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todosRef = ref(db, "todos");
    const todosQuery = query(todosRef, orderByChild("status"), equalTo("todo"));
    onValue(todosQuery, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setTodos(Object.entries(data));
      } else {
        setTodos([]);
      }
    });
  }, []);

  return (
    <div className="bg-gray-100 w-1/3 rounded-sm">
      <h2 className="p-5">Todo</h2>
      {todos.map(([id, t]) => {
        const today = new Date();
        const calculateDaysBetween = () => {
          const start = new Date(today);
          const end = new Date(t.deadline);

          const timeDiff = end - start;
          const dayDiff = timeDiff / (1000 * 3600 * 24);
          return dayDiff;
        };
        const dayDiff = calculateDaysBetween();

        return (
          <div className="m-10" key={id}>
            <ul>
              <li
                className={
                  dayDiff <= 0
                    ? "bg-red-100 p-5 rounded"
                    : dayDiff <= 7
                    ? "bg-yellow-200 p-5 rounded"
                    : "bg-green-200 p-5 rounded"
                }
              >
                <TodoItem todo={t} id={id} />
                <div className="flex gap-3 mt-2">
                  <SetInProgressButton todo={t} id={id} />
                  <EditButton />
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
