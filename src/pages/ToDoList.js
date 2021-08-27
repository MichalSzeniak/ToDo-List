import React from "react";
import "../style/ToDoLists.scss";
import { Link } from "react-router-dom";

const ToDoList = ({ lists, searchTerm }) => {

  return (
    <div>
      { 
      lists
        .filter((value) => {
          if (searchTerm === "") {
            return value;
          } else if (
            value.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          }
        })
        .map((item) => (
          <Link to={`/lists/${item.id}`} key={item.id} className="toDoList">
            <p className="toDoList__name">{item.name}</p>
            <p className="toDoList__data">
              Created at:{" "}
              {item.created_at.substr(0, 10).split("-").reverse().join("-")}
            </p>
            <p className="toDoList__statistics">
              Completed: {item.task.filter((e) => e.isDone === true).length}{" "}
              Uncompleted:{item.task.filter((e) => e.isDone === false).length}{" "}
              All: {item.task.length}
            </p>
          </Link>
        ))}
    </div>
  );
};

export default ToDoList;
