import "./Loggin.css"
import React, { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [loginData, setLoginData] = useState({
    username: "",
    email: "",
    phone: "",
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
      email: "",
      phone: "",
    });
  }

  return (
    <div className="login-container">
      <h1>Completa tus datos</h1>
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
          <label className="label-input">Correo electrónico</label>
          <input
            value={loginData.email}
            name="email"
            type="email"
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label className="label-input">Teléfono</label>
          <input
            value={loginData.phone}
            name="phone"
            type="text"
            required
            onChange={handleInputChange}
          />
        </div>
        
      
        <div className="form-button">
          <button onClick={onSubmit} type="submit">
            Enviar
          </button>
          <button onClick={clearFormData} type="cancel">
            Cancelar compra
          </button>
        </div>
      </form>
    </div>
  );
}
