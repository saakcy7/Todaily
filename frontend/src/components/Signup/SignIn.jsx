import React from "react";
import "./signup.css";
const SignIn = () => {
return(
    <>
<div className="signup"> 
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h1>SignIn</h1>
                <form>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email"/>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter Password"/>
                    </div>
                    <button type="submit" className="btn">SignIn</button>
                </form>
            </div>
        </div>
</div>
</div>
</>
);
}
export  default SignIn;