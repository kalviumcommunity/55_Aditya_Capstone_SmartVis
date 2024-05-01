import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Main.css";
import Signup from './Signup';

function Main() {
    const [Purpose, setPurpose] = useState('');
    const [Duration, setDuration] = useState('');
    const [WithWhom, setWithWhom] = useState('');
    const [TimeDate, setTimeDate] = useState('');
    const [Company, setCompany] = useState('');
    const [File, setFile] = useState(null); // State to hold selected file
    const [submittedValues, setSubmittedValues] = useState(null);

    useEffect(() => {
        fetchSubmittedValues();
    }, []);

    const isValidId = (id) => {
        return /^[a-zA-Z0-9]+$/.test(id);
    };

    const fetchSubmittedValues = async (id) => {
        try {
            if (!isValidId(id)) {
                console.error('Invalid id parameter');
                return;
            }

            const response = await axios.get(`https://five5-aditya-capstone-smartvis.onrender.com/visitor/${id}`);
            if (response.status === 200) {
                setSubmittedValues([response.data]);
            } else {
                console.error('Failed to fetch submitted values');
            }
        } catch (err) {
            console.error('Error fetching submitted values', err);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('Purpose', Purpose);
            formData.append('Duration', Duration);
            formData.append('WithWhom', WithWhom);
            formData.append('TimeDate', TimeDate);
            formData.append('Company', Company);
            formData.append('file', File); // Append selected file to form data

            const response = await axios.post(`https://five5-aditya-capstone-smartvis.onrender.com/visitor`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 200) {
                console.log('Form submitted successfully');

                if (response.data && response.data._id) {
                    fetchSubmittedValues(response.data._id);
                } else {
                    console.error('Error: response.data does not contain _id property');
                }
            } else {
                console.error('User entry failed');
            }
        } catch (err) {
            console.error('User entry not created', err);
        }
    }

    const handleUpdate = async (id) => {
        try {
            const response = await axios.put(`https://five5-aditya-capstone-smartvis.onrender.com/visitorUpdate/${id}`, {
                Purpose,
                Duration,
                WithWhom,
                TimeDate,
                Company
            });
            if (response.status === 200) {
                console.log('Entity updated successfully');
                fetchSubmittedValues(id);
            } else {
                console.error('Failed to update entity');
            }
        } catch (err) {
            console.error('Error updating entity', err);
        }
    }

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

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
                            <label htmlFor='company'>Company:</label>
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
                            <label htmlFor='Purpose'>Purpose:</label>
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
                            <label htmlFor='Host'>Host:</label>
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
                            <label htmlFor='Date-Time'>Date and Time:</label>
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
                            <label htmlFor='Duration'>Duration:</label>
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

                        <div className="e">
                            <label htmlFor='file'>Select File:</label>
                            <br />
                            <input
                                id='file'
                                type="file"
                                accept=".pdf,.doc,.docx,.txt,.jpg,.png"
                                onChange={handleFileChange}
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
                    {submittedValues && submittedValues.map((item) => (
                        <div key={item._id}>
                            <input type="text" value={item.WithWhom} onChange={(e) => setWithWhom(e.target.value)} />
                            <input type="datetime-local" value={item.TimeDate} onChange={(e) => setTimeDate(e.target.value)} />
                            <button onClick={() => handleUpdate(item._id)}>Update</button>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}

export default Main;
