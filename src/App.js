import "./App.css";
import TodoList from "./TodoList";
import TodoTitle from "./TodoTitlte";
import CreateTodo from "./CreateTodo";
import TodoMain from "./TodoMain";
import TodoBox from "./TodoBox";
import TodoDate from "./TodoDate";
import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <TodoTitle />
      <TodoDate />
      <div className="todo_section">
        <TodoBox modal={modal} setModal={setModal} />
        <TodoMain />
      </div>
      {modal ? <Modal setModal={setModal} /> : null}
    </div>
  );
}

export default App;
