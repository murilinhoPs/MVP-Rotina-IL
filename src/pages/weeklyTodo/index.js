import React, { useEffect, useState } from "react";
import "./styles.css";
import PersonsContainer from "../../components/personContainer/index";
// import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { TodoDaily } from "../todoDaily/";

const WeeklyTodo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const verifyWidth = () => {
      setIsMobile(window.outerWidth <= 760);

      console.log(isMobile);
    };

    window.addEventListener("resize", verifyWidth);

    verifyWidth();
  });

  return (
    <div className="container">
      {!isMobile ? <PersonsContainer /> : null}
      <TodoDaily day="Segunda" isMobile={isMobile} />
      <TodoDaily day="Terça" isMobile={isMobile} />
      <TodoDaily day="Quarta" isMobile={isMobile} />
      <TodoDaily day="Quinta" isMobile={isMobile} />
      <TodoDaily day="Sexta" isMobile={isMobile} />
      <TodoDaily day="Sábado" isMobile={isMobile} />
      <TodoDaily day="Domingo" isMobile={isMobile} />
    </div>
  );
};

export default WeeklyTodo;
