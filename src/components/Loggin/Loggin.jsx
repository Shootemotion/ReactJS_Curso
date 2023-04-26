
import "./Loggin.css"
import React, { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [loginData, setLoginData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  function handleInputChange(evt) {
    const inputText = evt.target.value;
    const inputName = evt.target.name;
    const newLoginData = { ...loginData };
    newLoginData[inputName] = inputText;
    setLoginData(newLoginData);
  }
  

  function onSubmit(evt) {
    evt.preventDefault();
    onLogin(loginData);
  }

  function clearFormData(evt) {
    evt.preventDefault();
    setLoginData({
      username: "",
      password: "",
    });
  }

  return (
   
    <div className="login-container">
      <h1>Inicia sesión para continuar 🔐</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="label-input">Nombre de usuario</label>
          <input
            value={loginData.username}
            name="username"
            type="text"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="label-input">Contraseña</label>
          <input
            value={loginData.password}
            name="password"
            type="password"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-button">
        <button onClick={onSubmit} type="submit">
          Iniciar sesión
        </button>
        <button onClick={clearFormData} type="cancel">Cancelar</button>
        </div>
      </form>
      </div>
 
  );
}