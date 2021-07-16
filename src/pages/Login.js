import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Login.scss";

const Login = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="login">
      <div className="login__container">
        <h2 className="login__header">Login</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <input
            className="login__input"
            type="text"
            placeholder="Email or Username"
            required
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            className="login__input"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__button">Login</button>
        </form>
        <span className="login__or">or</span>
        <Link to="/register" className="login__registerLink">
          Create a account
        </Link>
      </div>
    </section>
  );
};

export default Login;
