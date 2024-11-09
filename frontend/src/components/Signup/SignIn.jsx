import React, { useState } from "react";
import swal from 'sweetalert';
import "./signup.css";
import image2 from "../../assets/image2.jpg";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            swal("Error", "Both email and password are required.", "error");
            return;
        }

        if (!validateEmail(email)) {
            swal("Error", "Please enter a valid email address.", "error");
            return;
        }

        const user = { email, password };

        try {
            const response = await fetch('http://localhost:5000/api/v1/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const data = await response.json();
                // Handle successful sign-in, e.g., save token, redirect, etc.
                console.log('Sign-in successful', data);
                // Example: Save token to localStorage
                localStorage.setItem('token', data.token);
            } else {
                // Handle errors
                const errorData = await response.json();
                swal("Error", errorData.message, "error");
                console.error('Sign-in failed:', errorData.message);
            }
        } catch (error) {
            swal("Error", "An error occurred. Please try again.", "error");
            console.error('Error:', error);
        }
    };

    return (
        <div className="signup">
            <div className="container">
            <div className="image-section">
                <img src={image2} alt="image1" />
            </div>
            <div className="form-section">
                <div className="row">
                    <div className="col-md-6">
                        <h1>SignIn</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">SignIn</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignIn;