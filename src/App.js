import { useState } from "react";
import "./App.css";
import TodoComponent from "./components/TodoComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [todos, setTodos] = useState([]);
  const notify = (msg) => {
    toast.dark(msg);
  };
  return (
    <div className="App">
      <ToastContainer />
      <TodoComponent notify={notify} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
