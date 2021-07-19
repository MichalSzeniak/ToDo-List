import React, {useState, useEffect} from "react";
import triangle from "../assets/triangle.png"
import group from "../assets/Group.png"
import CreateList from "./CreateList"
import axios from "axios";
import { getUser } from "../service/auth";
import "../style/ToDoLists.scss";
import ToDoList from "./ToDoList";
import logoutIcon from "../assets/logout.png";
import { Link } from "react-router-dom";
import {logout} from "../service/auth"

const ToDoLists = () => {

    const [isActive, setIsActive] = useState(false)
    const [lists, setLists] = useState([])

  useEffect(() => {
    axios
    .get(
      "https://recruitment.ultimate.systems/to-do-lists",
      {
        headers: {
          Authorization: `Bearer ${getUser().jwt}`,
        },
      }
    )
    .then((response) => {
      // console.log(response);
      setLists(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])


  return (
    <section className="toDoLists">
      <Link to="/" onClick={() => logout()} className="toDoLists__logoutButton"><img src={logoutIcon} alt=""/></Link>
      <div className="toDoLists__container">
        <div className="toDoLists__search--container">
          <input className="toDoLists__search" type="text" placeholder="Search" />
          <button className="toDoLists__button"> <img className="toDoLists__button--triangle" src={triangle} alt=""/> Sort by</button>  
        </div>
        <div className="toDoList__container">
          {lists && <ToDoList lists={lists}/>}
        </div>
        <button className="toDoLists__createButton" onClick={() => setIsActive(true)}><img src={group} alt=""/></button>
        {isActive && <CreateList setIsActive={setIsActive} isActive={isActive}/>}
      </div>
    </section>
  );
};

export default ToDoLists;
