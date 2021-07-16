import React from 'react';
import '../style/Register.scss'
import arrow from '../assets/Arrow.png'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section className="register">
        <div className="register__container">
            <Link to="/" className="register__arrowIcon">
                <img src={arrow} alt=""/>
            </Link>
          <h2 className="register__header">Create a new account</h2>
          <form className="register__form">
            <input className="register__input" type="text" placeholder="Username" required />
            <input className="register__input" type="email" placeholder="Email" required />
            <input className="register__input" type="password" placeholder="Password" required />
            <input className="register__input" type="password" placeholder="Repeat password" required />
            <button className="register__button">Create</button>
          </form>
        </div>
      </section>
    )
}

export default Register
