import React from "react";
import "./ModuleSecond.css";
export default function ModuleSecond() {
  return (
    <div className="moduleSecond-container">
      <h1>Prueba la I.A</h1>
      <div className="pred">
        <label>Text: </label>
        <input type="text"></input>
      </div>
      <button className="predict">Predecir</button>
      <div className="prediction">
        <p>Positivo!</p>
      </div>
    </div>
  );
}
