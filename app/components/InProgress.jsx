import React from "react";
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
import TodoItem from "./TodoItem";
import SetDoneButton from "./SetDoneButton";

const InProgress = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todosRef = ref(db, "todos");
    const todosQuery = query(
      todosRef,
      orderByChild("status"),
      equalTo("inProgress"),
    );
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
      <h2 className="p-5">In progress</h2>

      {todos.map(([id, t]) => {
        return (
          <div>
            <ul className="m-10" key={id}>
              <li>
                <TodoItem todo={t} id={id} />
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default InProgress;
