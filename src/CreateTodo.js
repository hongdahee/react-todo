import "./index.css";
import { useRef, useState } from "react";

const CreateTodo = () => {
  const [task, setTask] = useState("");
  const inputref = useRef();

  const createTask = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/todos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        task: task,
        complete: false,
      }),
    }).then((response) => console.log(response));
    inputref.current.value = "";
    inputref.current.focus();
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          createTask(e);
        }}
      >
        <input
          onChange={(e) => {
            setTask(e.target.value);
          }}
          ref={inputref}
          type="text"
          placeholder="새로운 할일을 입력하기"
        ></input>
        <button>추가</button>
      </form>
    </>
  );
};

export default CreateTodo;
