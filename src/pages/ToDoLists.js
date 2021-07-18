import React, {useState} from "react";
import triangle from "../assets/triangle.png"
import group from "../assets/Group.png"
import CreateList from "./CreateList"


const ToDoLists = () => {

    const [isActive, setIsActive] = useState(false)


  return (
    <section className="ToDoLists">
      <div className="ToDoLists__container">
        <div className="ToDoLists__search--container">
          <input className="ToDoLists__search" type="text" placeholder="Search" />
          <button className="ToDoLists__button"> <img src={triangle} alt=""/> Sort by</button>  
        </div>
        <div>
            <span>sdsasdasdasdasdasd</span>
        </div>
        
        <button onClick={() => setIsActive(true)}><img src={group} alt=""/></button>
        {isActive && <CreateList setIsActive={setIsActive} isActive={isActive}/>}
      </div>
    </section>
  );
};

export default ToDoLists;
