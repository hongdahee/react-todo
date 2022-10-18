import "./App.css";

const TodoBox = ({ modal, setModal }) => {
  const clickBox = () => {
    setModal(!modal);
  };

  return (
    <>
      <div onClick={clickBox} className="todobox_section">
        Todo Box
      </div>
    </>
  );
};

export default TodoBox;
