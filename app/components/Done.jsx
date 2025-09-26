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
import DeleteButton from "./DeleteButton";

const Done = () => {

  const [todos, setTodos] = useState([]);
  
    useEffect(() => {
      const todosRef = ref(db, "todos");
      const todosQuery = query(todosRef, orderByChild("status"), equalTo("done"));
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
      <h2>Done</h2>
      {todos.map(([id, t]) => {
        return (
          <div key={id}>
            <ul className="my-5">
              <TodoItem todo={t} id={id} />
              <DeleteButton id={id} />
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Done;
