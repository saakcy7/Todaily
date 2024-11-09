import React, { useState } from "react";
import "./signup.css";
import image1 from "../../assets/image1.jpg";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { name, email, password };

        try {
            const response = await fetch('http://localhost:5000/api/v1/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                // Handle successful signup
                console.log('Signup successful');
            } else {
                // Handle errors
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="signup">
          
            <div className="container">
            <div className="image-section">
                <img src={image1} alt="image1" />
            </div>
            <div className="form-section">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Signup</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
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
                            <button type="submit" className="btn btn-primary">Signup</button>
                        </form>

                    </div>

                </div>
            </div>
        </div>
        </div>
    );
};

export default Signup;