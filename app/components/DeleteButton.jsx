import React from "react";
import { db } from "@/firebaseconfig";
import { remove, ref } from "firebase/database";

const DeleteButton = ({ id }) => {
  const deleteTodo = () => {
    const todosRef = ref(db, "todos/" + id);
    return remove(todosRef);
  };

  return (
    <div>
      <button
        onClick={deleteTodo}
        className="p-2 bg-red-400 text-black rounded-sm "
      >
        <div className="flex gap-1">
          <img className="max-h-5" src="./delete.svg" alt="a trash can icon" />
        Delete
        </div>
      </button>
    </div>
  );
};

export default DeleteButton;
