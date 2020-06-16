import React, { useState } from "react";
import "./styles.css";

const PersonsContainer = () => {
  const handleInput = () => {};

  return (
    <div className="PersonsContainer">
      <header>Participantes</header>
      <span className="Participantes">
        <input type="text" placeholder="Nome"></input>
        <input type="text" placeholder="Nome"></input>
        <input type="text" placeholder="Nome"></input>
        <input type="text" placeholder="Nome"></input>
        <input type="text" placeholder="Nome"></input>
      </span>
    </div>
  );
};

export default PersonsContainer;
