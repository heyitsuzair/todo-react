import React from "react";

export default function TodoList() {
  return (
    <div className="todo-list">
      <div className="example">
        <label className="checkbox-button">
          <input
            type="checkbox"
            className="checkbox-button__input"
            name="choice1"
          />
          <span className="checkbox-button__control"></span>
          <span className="checkbox-button__label">I agree</span>
        </label>
        <span className="cross">X</span>
      </div>
      <div className="example">
        <label className="checkbox-button">
          <input
            type="checkbox"
            className="checkbox-button__input"
            name="choice2"
          />
          <span className="checkbox-button__control"></span>
          <span className="checkbox-button__label">I agree</span>
        </label>
        <span className="cross">X</span>
      </div>
    </div>
  );
}
