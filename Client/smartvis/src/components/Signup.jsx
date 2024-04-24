import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';

import home from "../assets/home.png";

function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [signupError, setSignupError] = useState('');
    const [googleAuth, setGoogleAuth] = useState(null); // State to store Google Auth instance

    useEffect(() => {
        const initGoogleSignIn = () => {
            window.gapi.load('auth2', () => {
                const auth2 = window.gapi.auth2.init({
                    client_id:'108309497267-995sgd2rbrm7kg0loduqdsdi42va3rst.apps.googleusercontent.com',
                    scope: 'email',
                });
                setGoogleAuth(auth2); // Store Google Auth instance in state
            });
        };

        initGoogleSignIn();
    }, []);

    const handleGoogleLogin = async () => {
        try {
            const googleUser = await googleAuth.signIn();
            const profile = googleUser.getBasicProfile();
            const email = profile.getEmail();
            console.log('Logged in with Google:', email);
        } catch (error) {
            if (error.error === 'popup_closed_by_user') {
                console.log('Google sign-in popup was closed by the user.');
            } else {
                console.error('Google login failed:', error);
            }
        }
    };
    

   const handleGoogleLogout = async () => {
    try {
        if (googleAuth) {
            await googleAuth.signOut();
            console.log('Logged out from Google');
        } else {
            console.error('Google Auth instance is not initialized.');
        }
    } catch (error) {
        console.error('Error occurred during Google logout:', error);
    }
};

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`https://five5-aditya-capstone-smartvis.onrender.com/signup`, { username, password });
            if (response.status === 200) {
                console.log('Form submitted successfully');
                navigate("/")
            } else {
                console.error('Signup failed');
                setSignupError('Signup failed')
            }
        } catch (err) {
            console.error('An error occurred during the signup:', err);
            setSignupError('An error occured during the signup')
        }

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
            <div className='SignupNav'>
                <div className="items">
                    <div className="hlogo">
                        <Link to="/" className='abt'><h1 className='logo'><span className='smart'>Smart</span><span className='vis'>Vis</span></h1></Link>
                    </div>
                    <div className="navbar">
                        <h2>Register To Schedule Your First Appointment</h2>
                    </div>
                </div>  
            </div>
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
                            <button type="submit" className="button">Signup</button>
                        </div>  
                        <div className="google-login">
                          <div className="continue-with-google">
                            <button onClick={handleGoogleLogin} className="button-google">Continue with Google</button>
                          </div>
                          <div className="logout-from-google">
                            <button onClick={handleGoogleLogout} className="button-google">Logout from Google</button>
                          </div>  
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
