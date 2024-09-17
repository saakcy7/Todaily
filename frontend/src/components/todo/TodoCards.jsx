import React from "react";
import {AiFillDelete} from "react-icons/ai";
import {GrDocumentUpdate} from "react-icons/gr";
const TodoCards = ({title,body,id,delid,display}) => {
    return(
        <div className="p-3 todo-card">
            <div>
                <h5>{title}</h5>
                <p className="todo-card-p">{body.split("",27)}...</p>
            </div>
            <div className="d-flex justify-content-around">
            <div className="d-flex justify-content-center align-items-center card-icon-head px-2 px-1" onClick={()=>{
                display("block");
            }}>
                <GrDocumentUpdate className="todo-card-icon"/>
                Update
                </div>
                <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1" onClick={()=>{delid(id)}}>
                    <AiFillDelete className="todo-card-icon del"/>
                    Delete
                </div>
            </div>
        </div>

    )
};
export default TodoCards;