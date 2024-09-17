import React from "react";
import {useState} from "react";
import TodoCards from "./TodoCards";
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from "./Update";
import "./todo.css";
const Todo = () => {
    const [Inputs,setInputs]= useState({title:"",body:""});
    const [Array,setArray]=useState([]);
    const show=()=>{
        document.getElementById("textarea").style.display="block";
    };
    const change=(e)=>{
        const {name,value}=e.target;
        setInputs({...Inputs,[name]:value});
    };
    const submit=()=>{
        if(!Inputs.title||!Inputs.body){
            toast.error("Please fill all the fields");
            return;
        }
        setArray([...Array,Inputs]);
        setInputs({title:"",body:""});
        toast.success("Your task is added");
        toast.error("Your task is not saved in database, Please sign up");

        
    };
    const del=(id)=>{
        Array.splice(id,"1");
        setArray([...Array]);
    };
return(
    <>
<div className="todo">
    <ToastContainer/>
    <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
        <div className="d-flex flex-column todo-inputs-div w-50 p-1">
        <input type="text" placeholder="TITLE" className="my-2 p-2 todo-inputs" onClick={show} name="title" value={Inputs.title}onChange={change}/>
        <textarea id="textarea"type="text" placeholder="BODY"name="body"
         value={Inputs.body} onChange={change} className="p-2 todo-inputs"/>
        
        </div>
        <div>
        <button className="btn btn-primary my-2 w-100 px-2 py-1"onClick={submit}>ADD</button>
        </div>
    </div>
    <div className="todo-body">
        <div className="container-fluid">
            <div className="row">
            {Array&&Array.map((item,index)=>(
            <div className="col-lg-3 col-10 mx-5 my-2">
                <TodoCards title={item.title} body={item.body} id={index} delid={del}/>
            </div>
        ))}</div>
        </div>
       
        </div>
    </div>
    <div className="todo-update">
        <Update/>
    </div>
</>
);
}
export default Todo;
