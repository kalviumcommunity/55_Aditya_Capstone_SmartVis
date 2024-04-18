import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Main.css";
import Signup from './Signup';

const [Purpose, setPurpose] = useState('');
const [Duration, setDuration] = useState('');
const [WithWhom, setWithWhom] = useState('');
const [TimeDate, setTimeDate] = useState('');
const [Company, setCompany] = useState('');


const handleSubmit = async(event) => {
    event.preventDefault();

    try {
        const response = await axios.post(`https://five5-aditya-capstone-smartvis.onrender.com/visitor`, { Purpose, Duration, WithWhom, TimeDate, Company });
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
}


function Main() {
    return (
        <>
            <div className='MainNav'>
                <div className="items">
                    <div className="hlogo">
                        <Link to="/" className='abt'><h1 className='logo'><span className='smart'>Smart</span><span className='vis'>Vis</span></h1></Link>
                    </div>
                    <div className="login">
                        <h2>Book Your First Appointment</h2>
                    </div>
                </div>
            </div>

            <div className="schedule">
                <div className="appoint">
                    <form onSubmit={handleSubmit}>

                        <div className="e">
                            <label for='company'>Company:</label>
                            <br />
                            <input
                                id='company'
                                type="text"
                                value={Company}
                                onChange={(e) => setCompany(e.target.value)}
                                
                            />
                            <span className="error"></span>
                        </div>
                        <br />

                        <div className="e">
                            <label for='Purpose'>Purpose:</label>
                            <br />
                            <input
                                id='Purpose'
                                type="text"
                                value={Purpose}
                                onChange={(e) => setPurpose(e.target.value)}
                                required
                            />
                            <span className="error"></span>
                        </div>
                        <br />

                        <div className="e">
                            <label for='Host'>Host:</label>
                            <br />
                            <input
                                id='Host'
                                type="text"
                                value={WithWhom}
                                onChange={(e) => setWithWhom(e.target.value)}
                                required 
                            />
                            <span className="error"></span>
                        </div>
                        <br />

                        <div className="e">
                            <label for='Date-Time'>Date and Time:</label>
                            <br />
                            <input
                                id='Date-Time'
                                type="datetime-local"
                                value={TimeDate}
                                onChange={(e) => setTimeDate(e.target.value)}
                                required
                            />
                            <span className="error"></span>
                        </div>
                        <br />

                        <div className="e">
                            <label for='Duration'>Duration:</label>
                            <br />
                            <input
                                id='Duration'
                                type="number"
                                placeholder='duration in minutes'
                                value={Duration}
                                onChange={(e) => setDuration(e.target.value)}
                                required
                            />
                            <span className="error"></span>
                        </div>
                        <br />
                        <div className="sbtn">
                            <button type="submit" className="button">Submit</button>
                        </div>
                    </form>
                </div>

                <div className="visit">
                    <div className="close-btn"><img src="https://cdn-icons-png.flaticon.com/128/6276/6276642.png" alt="" height="50px" /></div>
                    <div className="upcoming">
                        <div className="visit-to-come"><h1>Upcoming Visits</h1></div>
                        <input type="text" className='visitor'/><br /><br />
                        <div className="btns">
                            <button className='update'>Update</button>
                            <button className='cancel'>Cancel</button>
                        </div>
                        <input type="text" className='visitor'/><br /><br />
                        <div className="btns">
                            <button className='update'>Update</button>
                            <button className='cancel'>Cancel</button>
                        </div>
                        <input type="text" className='visitor'/><br /><br />
                        <div className="btns">
                            <button className='update'>Update</button>
                            <button className='cancel'>Cancel</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Main;



