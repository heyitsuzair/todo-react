import React from "react";
import { useState, useRef } from "react";

export default function AddTodo() {
  const [value, setValue] = useState("What Do You Need To Do Today?");
  const ref = useRef("");
  const handleChange = () => {
    setValue(ref.current.value);
  };

  return (
    <div className="add-todo">
      <h5>Awesome Todo List</h5>
      <form>
        <input
          type="text"
          name="addTodo"
          value={value}
          id="add-todo"
          ref={ref}
          onChange={handleChange}
        />
        <button className="btn-primary">Add</button>
      </form>
    </div>
  );
}
