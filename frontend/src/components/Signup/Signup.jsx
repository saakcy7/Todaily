import React from "react";
import "./signup.css";
const Signup = () => {
return(
    <>
<div className="signup"> 
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h1>Signup</h1>
                <form>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Name"/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email"/>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter Password"/>
                    </div>
                    <div className="form-group">
                        <label for="cpassword">Confirm Password</label>
                        <input type="password" className="form-control" id="cpassword" placeholder="Confirm Password"/>
                    </div>
                    <button type="submit" className="btn">SignUp</button>
                </form>
            </div>
        </div>
</div>
</div>
</>
);
}
export  default Signup;