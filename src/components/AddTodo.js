import React from "react";
import { useState, useRef } from "react";

export default function AddTodo({ setTodos, todos, notify }) {
  const [value, setValue] = useState("What Do You Need To Do Today?");
  const [unique, setUnique] = useState(1);
  const ref = useRef("");
  const handleChange = () => {
    setValue(ref.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUnique(unique + 1);
    notify("Todo Added!");
    setTodos(todos.concat({ id: unique, title: value }));
  };
  return (
    <div className="add-todo">
      <h5>Awesome Todo List</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={value}
          id="add-todo"
          ref={ref}
          onChange={handleChange}
        />
        <button type="submit" className="btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}
