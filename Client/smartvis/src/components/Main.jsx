import React from 'react';
import { Link } from 'react-router-dom';
import "./Main.css";

function Main() {
    return (
        <>
            <div className='navigation'>
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
                    <form>

                        <div className="e">
                            <label for='company'>Company:</label>
                            <br />
                            <input
                                id='company'
                                type="text"
                                
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
                
            </div>
        </>
    );
}

export default Main;



