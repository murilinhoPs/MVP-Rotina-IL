import React from "react";
import "./styles.css";
import TodoComponent from "../../components/todoComponent/index";
import PersonsContainer from "../../components/personContainer/index";

export const TodoDaily = ({ day, isMobile }) => {
  return (
    <div className="DayContainer">
      <header className="DayName">{day}</header>
      <span className="DayTable">
        {isMobile ? <PersonsContainer /> : null}
        <div className="DayTodo">
          <TodoComponent />
          <TodoComponent />
          <TodoComponent />
          <TodoComponent />
          <TodoComponent />
        </div>
      </span>
    </div>
  );
};
