import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
export default function TodoComponent() {
  return (
    <div className="todo">
      <div className="todo-inner">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}
