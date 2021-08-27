import React from 'react'
import checkbox from "../assets/checkbox.png";
import checkboxChecked from "../assets/checkboxChecked.png";
import "../style/Task.scss"


const Task = ({id, isDone, name, setTask, toDoList}) => {


    const handleConfirm = () => {
        setTask(toDoList.map(item => {
        if(item.id === id) {
          return {
            ...item, isDone: !item.isDone
          };
        }
        return item
      }
      ))
    }

    return (
        <div className="task" key={id}>
        <div className="task__container">
          <div onClick={handleConfirm} className="task__checkbox">
            {isDone ? (
              <img src={checkboxChecked} alt="" />
            ) : (
              <img src={checkbox} alt="" />
            )}
          </div>
          <p className="task__TaskName">{name}</p>
        </div>
      </div>
    )
}

export default Task
