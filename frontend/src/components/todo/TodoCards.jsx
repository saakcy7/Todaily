import React from "react";
const TodoCards = ({title,body}) => {
    return(
        <div className="p-3 todo-card">
            <div>
                <h5>{title}</h5>
                <p className="todo-card-p">{body}</p>
            </div>
        </div>
    )
};
export default TodoCards;