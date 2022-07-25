import React from "react";
import AddTodo from "./AddTodo";
export default function TodoComponent() {
  return (
    <div className="todo">
      <div className="todo-inner">
        <AddTodo />
      </div>
    </div>
  );
}
