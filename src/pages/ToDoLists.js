import React, { useState, useEffect } from "react";
import triangleUp from "../assets/triangleUp.png";
import triangleDown from "../assets/triangleDown.png";
import group from "../assets/Group.png";
import CreateList from "./CreateList";
import axios from "axios";
import { getUser } from "../service/auth";
import "../style/ToDoLists.scss";
import ToDoList from "./ToDoList";
import logoutIcon from "../assets/logout.png";
import { Link } from "react-router-dom";
import { logout } from "../service/auth";

const ToDoLists = () => {
  const [isActive, setIsActive] = useState(false);
  const [lists, setLists] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState(false);


const test = () => {
  if(sort) {
    return `https://recruitment.ultimate.systems/to-do-lists?_sort=id:ASC`
  } else {
    return `https://recruitment.ultimate.systems/to-do-lists?_sort=id:DESC`
  }
}

  useEffect(() => {
    axios
      .get(test(), {
        headers: {
          Authorization: `Bearer ${getUser().jwt}`,
        },
      })
      .then((response) => {
        // console.log(response);
        setLists(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sort]);

  return (
    <section className="toDoLists">
      <Link to="/" onClick={() => logout()} className="toDoLists__logoutButton">
        <img src={logoutIcon} alt="" />
      </Link>
      <div className="toDoLists__container">
        <div className="toDoLists__search--container">
          <input
            className="toDoLists__search"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => setSort(!sort)} className="toDoLists__button">
            <img className="toDoLists__button--triangle" src={sort ? triangleUp : triangleDown} alt="" />
            Sort by
          </button>
        </div>
        {isActive && (
          <CreateList setIsActive={setIsActive} isActive={isActive}/>
        )}
          {lists && <ToDoList lists={lists} searchTerm={searchTerm} />}
        <button
          className="toDoLists__createButton"
          onClick={() => setIsActive(true)}
        >
          <img src={group} alt="" />
        </button>
      </div>
    </section>
  );
};

export default ToDoLists;
