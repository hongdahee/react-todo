import "./App.css";

const TodoDate = () => {
  let now = new Date();
  let year = now.getFullYear();
  let todayMonth = now.getMonth() + 1;
  let todayDate = now.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  let dayOfWeek = week[now.getDay()];

  return (
    <div className="todo-date">
      {year +
        "년 " +
        todayMonth +
        "월 " +
        todayDate +
        "일 " +
        dayOfWeek +
        "요일 "}
    </div>
  );
};

export default TodoDate;
