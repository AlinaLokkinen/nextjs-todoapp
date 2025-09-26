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
    <div>
      <h2>Todo</h2>
      {todos.map(([id, t]) => {
        return (
          <div key={id}>
            <ul className="my-5">
              <TodoItem todo={t} id={id} />
              <SetInProgressButton todo={t} id={id} />
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
