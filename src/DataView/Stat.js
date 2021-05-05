import React, { useEffect, useState } from "react";
import "./Stat.css";
export default function Stat(props) {
  const [shown, setShown] = useState(null);

  useEffect(() => {
    console.log(props.type);

    if (props.type == "first") {
      let stats = [];

      for (const [key, value] of Object.entries(props.data)) {
        console.log(value["value"]);
        stats.push(
          <div key={value["url"]} className="stat-module">
            <div style={{ backgroundImage: `url(${value["url"]})` }}></div>
            <p>{value["value"]}</p>
          </div>
        );
      }

      setShown(<div>{stats}</div>);
    } else if (props.red == true) {
      setShown(
        <div className="stat-module">
          <div
            style={{
              backgroundImage: `url(${props.data["url"]})`,
            }}
          ></div>
          <p>{props.data["value"]}</p>
        </div>
      );
    } else {
      setShown(
        <div className="stat-module">
          <p>{props.data}</p>
        </div>
      );
    }
  }, []);

  return (
    <div
      className={props.red == true ? "stat-container red" : "stat-container"}
    >
      {props.red == null ? null : <div className="black"></div>}
      {props.red == null ? (
        <p style={{ marginBottom: "8px" }}>{props.name}</p>
      ) : null}
      {shown}
    </div>
  );
}
