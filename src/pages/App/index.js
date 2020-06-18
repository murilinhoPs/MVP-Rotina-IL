import React from "react";

import "./styles.css";
import WeeklyTodo from "../weeklyTodo";
const App = () => {

  return (
    <>
      <button className="PrintButton" onClick={() => window.print({})}>
        Imprimir
      </button>
        <WeeklyTodo />
    </>
  );
};

export default App;
