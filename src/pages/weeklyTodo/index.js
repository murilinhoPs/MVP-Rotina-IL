import React, { useEffect, useState } from "react";

import "./styles.css";
import { TodoDaily } from "../todoDaily/";

const WeeklyTodo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const verifyWidth = () => {
      setIsMobile(window.outerWidth <= 768);
    };

    window.addEventListener("resize", verifyWidth);

    verifyWidth();
  });

  return (
    <span>
    <div className="container">
      <TodoDaily day="Segunda" />
      <TodoDaily day="Terça" />
      <TodoDaily day="Quarta" />
      <TodoDaily day="Quinta" />
      <TodoDaily day="Sexta" />
      <TodoDaily day="Sábado" />
      <TodoDaily day="Domingo" />
    </div>
    </span>
  );
};

export default WeeklyTodo;
