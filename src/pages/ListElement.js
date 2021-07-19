import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../style/ListElement.scss";
import axios from "axios";
import { getUser } from "../service/auth";
import garbage from "../assets/garbage.svg";
import Task from "./Task";

const ListElement = () => {
  const [isDone, setIsDone] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [task, setTask] = useState([]);
  const [name, setName] = useState();
  let { id } = useParams();
  const history = useHistory();

  const handleCancel = () => {
    setIsDone(false);
    setTaskName("");
  };

  const handleAdd = () => {
    if (taskName) {
      const name = taskName;
      const data = { name, isDone };
      setTask([...task, data]);
      setIsDone(false);
      setTaskName("");
    } else {
      alert("...");
    }
  };

  useEffect(() => {
    axios
      .get(`https://recruitment.ultimate.systems/to-do-lists/${id}`, {
        headers: {
          Authorization: `Bearer ${getUser().jwt}`,
        },
      })
      .then((response) => {
        // console.log(response);
        setTask(response.data.task);
        setName(response.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSave = async () => {
    axios
      .put(
        `https://recruitment.ultimate.systems//to-do-lists/${id}`,
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
        history.push("/lists");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTaskList = () => {
    axios
      .delete(`https://recruitment.ultimate.systems//to-do-lists/${id}`, {
        headers: {
          Authorization: `Bearer ${getUser().jwt}`,
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((response) => {
        history.push("/lists");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="listElement">
      <button to="/" onClick={deleteTaskList} className="listElement__garbage">
        <img src={garbage} alt="garbage" />
      </button>
      <div className="listElement__container">
        <div className="listElement__container--inner">
          <input
            className="listElement__listName"
            type="text"
            placeholder="List name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="listElement__break"></span>
          <ul>
            {task.map((item) => (
              <Task
                id={item.id}
                isDone={item.isDone}
                name={item.name}
                setTask={setTask}
                task={item}
                toDoList={task}
              />
            ))}
          </ul>

          <form
            className="listElement__form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="listElement__form--inputs">
              <div className="listElement__checkbox">
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
                className="listElement__TaskName"
                placeholder="Task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>
            <div className="listElement__formButtons">
              <button
                className="listElement__cancelButton"
                onClick={handleCancel}
              >
                CANCEL
              </button>
              <button className="listElement__addButton" onClick={handleAdd}>
                ADD
              </button>
            </div>
            <div className="listElement__buttons">
              <button
                className="listElement__leaveButton"
                onClick={() => history.push("/lists")}
              >
                CANCEL
              </button>
              <button className="listElement__saveButton" onClick={handleSave}>
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ListElement;
