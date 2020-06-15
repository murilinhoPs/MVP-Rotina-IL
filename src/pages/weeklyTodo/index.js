import React from "react";
import './styles.css'
import TodoComponent from '../todoComponent/index';

const WeeklyTodo = () => {
  return <div className="container">
    <TodoComponent />
    <TodoComponent />
    <TodoComponent />
    <TodoComponent />
    <TodoComponent />
  </div>;
};

export default WeeklyTodo;
