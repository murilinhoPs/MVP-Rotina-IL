import React from "react";
import "./styles.css";
import TodoComponent from "../../components/todoComponent/index";

export const TodoDaily = ({ day }) => {
  return (
    <div className="DayContainer">
      <header className="DayName">{day}</header>
      <div className="DayTodo">
        <TodoComponent id={day} />
      </div>
    </div>
  );
};
