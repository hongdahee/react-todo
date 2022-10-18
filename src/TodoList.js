import { useEffect, useState } from "react";
import "./App.css";

const TodoList = () => {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList);

  useEffect(() => {
    fetch("http://localhost:3001/todos/")
      .then((res) => res.json())
      .then((task) => setTaskList(task))
      .catch((err) => console.log(err));
  }, []);

  const deleteTask = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  const completeTask = (el) => {
    fetch(`http://localhost:3001/todos/${el.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...el,
        complete: true,
      }),
    }).catch((err) => console.log(err));
  };

  const uncompleteTask = (el) => {
    fetch(`http://localhost:3001/todos/${el.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...el,
        complete: false,
      }),
    }).catch((err) => console.log(err));
  };

  const moveToBox = (el) => {
    deleteTask(el.id);
    fetch("http://localhost:3001/box/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        ...el,
      }),
    }).then((response) => console.log(response));
  };

  return (
    <>
      <ul className="todolist-list">
        {taskList.map((el) => {
          return (
            <li className="todolist-task">
              <div className="task_container">
                <input
                  checked={el.complete ? "checked" : null}
                  onChange={() => {
                    el.complete ? uncompleteTask(el) : completeTask(el);
                  }}
                  type="checkbox"
                  className="todolist-checkbox"
                />
                <span className={el.complete ? "todolist-complete" : null}>
                  {el.task}
                </span>
              </div>
              <div className="button_container">
                <span className="todolist-btn" onClick={() => moveToBox(el)}>
                  📦
                </span>
                <span
                  onClick={() => deleteTask(el.id)}
                  className="todolist-btn"
                >
                  🗑
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
