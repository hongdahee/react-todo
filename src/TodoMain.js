import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import "./App.css";
import TodoBtn from "./TodoBtn";
import { useState, useEffect } from "react";

const TodoMain = () => {
  const [taskNum, setTaskNum] = useState("");
  const [completeNum, setCompleteNum] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/todos/")
      .then((res) => res.json())
      .then((task) => {
        setTodo(task);
        setTaskNum(todo.length);
        setCompleteNum(todo.filter((el) => el.complete === true).length);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="todomain_section">
      <div className="todomain">
        <div className="todomain-complete">{`${completeNum} / ${taskNum}`}</div>
        <CreateTodo />
        <TodoList />
        <TodoBtn todo={todo} content="초기화"></TodoBtn>
      </div>
    </div>
  );
};

export default TodoMain;
