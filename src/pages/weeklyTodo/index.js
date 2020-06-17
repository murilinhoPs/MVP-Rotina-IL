import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import "./styles.css";
import { TodoDaily } from "../todoDaily/";

const WeeklyTodo = () => {
  const [isMobile, setIsMobile] = useState(false);

  const printableRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printableRef.current,
  });

  useEffect(() => {
    const verifyWidth = () => {
      setIsMobile(window.outerWidth <= 768);

      console.log(isMobile);
    };

    window.addEventListener("resize", verifyWidth);

    verifyWidth();
  });

  return (
    <>
    <button className="PrintButton" onClick={handlePrint}>Imprimir</button>
      <div className="container" ref={printableRef}>
        <TodoDaily day="Segunda" />
        <TodoDaily day="Terça" />
        <TodoDaily day="Quarta" />
        <TodoDaily day="Quinta" />
        <TodoDaily day="Sexta" />
        <TodoDaily day="Sábado" />
        <TodoDaily day="Domingo" />
      </div>
    </>
  );
};

export default WeeklyTodo;
