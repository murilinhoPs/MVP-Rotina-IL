import React from "react";
import "./styles.css";
import TodoComponent from "../../components/todoComponent/index";

export const TodoDaily = ({ day, isMobile }) => {
  return (
    <div className="DayContainer">
      <header className="DayName">{day}</header>
      <div className="DayTodo">
        <TodoComponent />
      </div>
    </div>
  );
};
