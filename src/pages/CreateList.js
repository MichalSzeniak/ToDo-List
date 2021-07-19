import React, { useState } from "react";
import "../style/CreateList.scss";
import checkbox from "../assets/checkbox.png";
import checkboxChecked from "../assets/checkboxChecked.png";
import { getUser } from "../service/auth";
import axios from "axios";

const CreateList = ({ setIsActive, isActive }) => {
  const [isDone, setIsDone] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [name, setName] = useState("");
  const [task, setTask] = useState([]);

  const handleCancel = () => {
    setIsDone(false);
    setTaskName("");
  };

  const handleAdd = () => {
    if (taskName) {
      const name = taskName;
      const data = { name, isDone };
      setTask([...task, data]);
      setIsDone("");
      setTaskName("");
    } else {
      alert("...");
    }
  };

  const handleSave = async () => {
    axios
      .post(
        "https://recruitment.ultimate.systems/to-do-lists",
        {
          name,
          task,
        },
        {
          headers: {
            Authorization: `Bearer ${getUser().jwt}`,
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      )
      .then((response) => {
        console.log(response);
        setIsActive(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="createList">
      <div className="createList__container">
        <div className="createList__container--inner">
          <input
            className="createList__listName"
            type="text"
            placeholder="List name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="createList__break"></span>
          {task.map((listItem) => (
            <div
              className="listElement"
              key={Math.floor(Math.random() * (10000 - 1)) + 1}
            >
              <div className="listElement__container">
                <div className="checkbox__test">
                  {listItem.isDone ? (
                    <img src={checkboxChecked} alt="" />
                  ) : (
                    <img src={checkbox} alt="" />
                  )}
                </div>
                <p className="listElement__TaskName">{listItem.name}</p>
              </div>
            </div>
          ))}

          <form
            className="createList__form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="createList__form--inputs">
              <div className="checkbox__test">
                <input
                  type="checkbox"
                  checked={isDone}
                  onChange={() => setIsDone(!isDone)}
                  id="ossm"
                  name="ossm"
                />
                <label for="ossm" className="label" />
              </div>
              <input
                className="createList__TaskName"
                placeholder="Task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>
            <div className="createList__formButtons">
              <button
                className="createList__cancelButton"
                onClick={handleCancel}
              >
                CANCEL
              </button>
              <button className="createList__addButton" onClick={handleAdd}>
                ADD
              </button>
            </div>
            <div className="createList__buttons">
              <button
                className="createList__leaveButton"
                onClick={() => setIsActive(!isActive)}
              >
                CANCEL
              </button>
              <button className="createList__saveButton" onClick={handleSave}>
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateList;
