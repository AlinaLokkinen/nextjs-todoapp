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
      const todosQuery = query(todosRef, orderByChild("status"), equalTo("inProgress"));
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
      <h2>In progress</h2>

       {todos.map(([id, t]) => {
        return (
          <div>
            <ul className="my-5">
              <TodoItem todo={t} />
              <SetDoneButton key={id} todo={t} id={id} />
            </ul>
            
          </div>
        );
      })}
    </div>
  );
};

export default InProgress;
