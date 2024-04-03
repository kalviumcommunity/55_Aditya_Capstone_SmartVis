
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';
import home from "../assets/home.png";

function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loginMessage, setLoginMessage] = useState('');


    return (
        <>
            <nav className='nav'>
              <div className="items">
                <div className="hlogo">
                <Link to="/"><img src={home} alt=""  height="80px" className='h'/></Link>
                </div>
                <div className="navbar">
                    <h2>Register To Schedule Your First Appointment</h2>
                </div>
              </div>  
            </nav>
            <div className="register">
                <div className="form-container">
                    <form>

                        <div className="e">
                            <label>Email:</label>
                            <br />
                            <input
                                type="email"
                                required
                            />
                        </div>
                        <br></br>

                        <div className="e">
                            <label>Username:</label>
                            <br />
                            <input
                                type="text"
                                required
                            />
                        </div>
                        <br></br>

                        <div className="e">
                            <label>Password:</label>
                            <br />
                            <input
                                type="password"
                                required
                                minLength={6}
                            />
                        </div>
                        <br></br>
                      <div className="sbtn">
                        <button type="submit" className="button">Signup</button>
                      </div>  
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
