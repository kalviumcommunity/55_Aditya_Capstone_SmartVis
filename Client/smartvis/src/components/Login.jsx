import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import home from "../assets/home.png";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        let isValid = true;

        // Email validation
        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email address');
            isValid = false;
        } else {
            setEmailError('');
        }

        // Username validation
        if (!username) {
            setUsernameError('Username is required');
            isValid = false;
        } else {
            setUsernameError('');
        }

        // Password validation
        if (!password) {
            setPasswordError('Password is required');
            isValid = false;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (isValid) {
        
            console.log('Form submitted successfully');
        }
    };

    return (
        <>
            <nav className='nav'>
              <div className="items">
                <div className="hlogo">
                    <Link to="/"><img src={home} alt=""  height="80px" className='h'/></Link>
                </div>
                <div className="login">
                    <h2>Login Here</h2>
                </div>
              </div>  
            </nav>
            <div className="register">
                <div className="form-container">
                    <form onSubmit={handleSubmit}>

                        <div className="e">
                            <label>Email:</label>
                            <br />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <span className="error">{emailError}</span>
                        </div>
                        <br/>

                        <div className="e">
                            <label>Username:</label>
                            <br />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <span className="error">{usernameError}</span>
                        </div>
                        <br/>

                        <div className="e">
                            <label>Password:</label>
                            <br />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={6}
                            />
                            <span className="error">{passwordError}</span>
                        </div>
                        <br/>
                      <div className="sbtn">
                        <button type="submit" className="button">Login</button>
                      </div>  
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;