import React, { useState } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
export default function Login() {
  const [link, setLink] = useState(null);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const goToDashboard = () => {
    if (user == "admin" && pass == "admin") {
      setLink(<Redirect to="/dashboard">Click Me</Redirect>);
    }
  };
  return (
    <div className="login-container">
      {link}
      <div className="login-box">
        <div className="login-logo"></div>
        <input
          onChange={(e) => setUser(e.target.value)}
          value={user}
          type="text"
          placeholder="Usuario"
        ></input>
        <input
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          values={pass}
          type="password"
          placeholder="Password"
        ></input>
        <button onClick={goToDashboard}>Ingresar</button>
        <div className="forgot-password">
          Se olvido su contraseña? Click para recuperar
        </div>
      </div>
    </div>
  );
}
