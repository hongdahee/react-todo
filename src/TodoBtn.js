const TodoBtn = ({ content, todo }) => {
  const resetList = () => {
    todo.forEach((el) => {
      fetch(`http://localhost:3001/todos/${el.id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));
    });
    window.location.reload();
  };

  return (
    <button
      onClick={() => {
        resetList();
      }}
    >
      {content}
    </button>
  );
};

export default TodoBtn;
