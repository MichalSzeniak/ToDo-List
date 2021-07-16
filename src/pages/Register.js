import React, { useState } from "react";
import "../style/Register.scss";
import arrow from "../assets/Arrow.png";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      alert("Passwords don't match");
    } else {
      const data = {username, email, password };

      fetch(`https://recruitment.ultimate.systems/auth/local/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            history.push("/")
            setError(null)
        })
        .catch((err) => setError(err.message))

    }
  };

  return (
    <section className="register">
      <div className="register__container">
        <Link to="/" className="register__arrowIcon">
          <img src={arrow} alt="" />
        </Link>
        <h2 className="register__header">Create a new account</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <input
            className="register__input"
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="register__input"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="register__input"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="register__input"
            type="password"
            placeholder="Repeat password"
            required
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          <button className="register__button">Create</button>
        </form>
      </div>
    </section>
  );
};

export default Register;
