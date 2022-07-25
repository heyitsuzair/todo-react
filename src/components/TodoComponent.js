import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
export default function TodoComponent({ todos, setTodos, notify }) {
  return (
    <div className="todo">
      <div className="todo-inner">
        <AddTodo notify={notify} setTodos={setTodos} todos={todos} />
        <TodoList notify={notify} setTodos={setTodos} todos={todos} />
      </div>
    </div>
  );
}
