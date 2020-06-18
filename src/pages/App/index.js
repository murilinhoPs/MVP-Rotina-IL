import React from "react";

import "./styles.css";
import WeeklyTodo from "../weeklyTodo";
const App = () => {
  return (
    <>
      <div className="App">
        <h2>Divisão de Tarefas</h2>
        <img src={require("../../assets/iris-fundo.png")} alt="Logo"></img>
      </div>
      <button className="PrintButton" onClick={() => window.print({})}>
        Imprimir
      </button>

      <WeeklyTodo />
    </>
  );
};

export default App;
