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
        return (
          <div className="m-10" key={id}>
            <ul>
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

export default Todo;
