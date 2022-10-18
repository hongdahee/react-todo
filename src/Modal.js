import { useState, useEffect } from "react";
import "./App.css";

const Modal = ({ setModal }) => {
  const [boxList, setBoxList] = useState([]);
  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    fetch("http://localhost:3001/box/")
      .then((res) => res.json())
      .then((task) => setBoxList(task))
      .catch((err) => console.log(err));
  }, []);

  const deleteTask = (id) => {
    fetch(`http://localhost:3001/box/${id}`, {
      method: "DELETE",
    }).catch((err) => console.log(err));
  };

  const moveToTodo = (el) => {
    deleteTask(el.id);
    fetch("http://localhost:3001/todos/", {
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
    <div className="modal">
      <div onClick={closeModal} className="modal-close">
        ✖︎
      </div>
      <ul className="modal-boxlist">
        {boxList.map((el) => {
          return (
            <li>
              <div className="modal-list">
                <div className="list_container">
                  <span>{el.task}</span>
                </div>
                <div className="btn_container">
                  <span className="modal-move" onClick={() => moveToTodo(el)}>
                    TODO
                  </span>
                  <span
                    className="modal-delete"
                    onClick={() => deleteTask(el.id)}
                  >
                    🗑
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Modal;
