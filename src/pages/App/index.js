import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import "./styles.css";
import WeeklyTodo from "../weeklyTodo";
const App = () => {
  const printableRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printableRef.current,
    
  });

  return (
    <>
      <button className="PrintButton" onClick={handlePrint}>
        Imprimir
      </button>
      <div ref={printableRef}>
        <WeeklyTodo />
      </div>
    </>
  );
};

export default App;
