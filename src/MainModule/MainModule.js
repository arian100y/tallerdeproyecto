import React, { useState } from "react";
import DataView from "../DataView/DataView";
import "./MainModule.css";
export default function MainModule() {
  const [url, setUrl] = useState("");
  const [option, setOption] = useState("");
  return (
    <div className="main-container">
      <div className="main-first">
        <div className="main-options">
          <label>URL:</label>
          <input
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            style={{ width: "300px" }}
            type="text"
          ></input>
        </div>
        <div className="main-options">
          <label>Topico:</label>
          <select
            onChange={(e) => {
              setOption(e.target.value);
            }}
            value={option}
            name="cars"
            id="cars"
            style={{ width: "200px" }}
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <button
          onClick={() => {
            setUrl("");
            setOption("");
          }}
          className="limpiar"
        >
          Limpiar
        </button>
      </div>
      <button className="main-button">Analizar</button>
      <div className="main-data">
        <DataView></DataView>
      </div>
    </div>
  );
}
