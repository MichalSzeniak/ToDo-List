import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../style/Login.scss";
import {setUser} from "../service/auth";
import {getUser} from "../service/auth";

console.log(getUser())

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { identifier, password };

    fetch(`https://recruitment.ultimate.systems/auth/local`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setUser(data);
        history.push("/lists");
        setError(null);
      })
      .catch((err) => setError(err.message));
  };

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
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
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
