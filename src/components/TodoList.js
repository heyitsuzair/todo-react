import React from "react";

export default function TodoList({ todos, setTodos, notify }) {
  const handleClick = (id) => {
    let newTodo = todos.filter(function (item) {
      return item.id !== id;
    });
    setTodos(newTodo);
    notify("Todo Deleted!");
  };
  const handleCheck = (e) => {
    if (e.target.checked) {
      notify("Todo Marked As Completed!");
    } else {
      notify("Todo Removed As Completed!");
    }
  };
  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return (
          <div className="example" key={todo.id}>
            <label className="checkbox-button">
              <input
                type="checkbox"
                className="checkbox-button__input"
                name="choice1"
                value={todo.id}
                onClick={handleCheck}
              />
              <span className="checkbox-button__control"></span>
              <span className="checkbox-button__label">{todo.title}</span>
            </label>
            <span className="cross" onClick={() => handleClick(todo.id)}>
              X
            </span>
          </div>
        );
      })}
    </div>
  );
}
