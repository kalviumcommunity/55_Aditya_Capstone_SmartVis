const express = require('express')
const app = express()
const mongoose = require('mongoose')
const rateLimit = require('express-rate-limit')  // Import rate limiter
require('dotenv').config()
const jwt = require('jsonwebtoken')
const { Model } = require("./Schema")
const { userModel } = require("./Meetschema")
var cors = require('cors')
app.use(cors())
app.use(express.json())

// Rate Limiter Middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100, 
    standardHeaders: true, 
    legacyHeaders: false, 
});

// Apply rate limiter to all requests
app.use(limiter);

let connectionStatus = 'disconnected';

const startDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        connectionStatus = "The database has been connected!!";
    } catch (err) {
        console.error("Failed to connect to database");
        connectionStatus = "Failed to connect to database";
        console.log('error', err)
    }
};

app.get('/data', async (req, res) => {
    try {
        const data = await Model.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err);
        console.log("Error in fetching data");
    }
});

app.post('/signup', async (req, res) => {
    try {
        const user = {
            username: req.body.username,
            password: req.body.password
        };
        const response = await userModel.create(user);
        res.status(200).send(response);
    } catch (err) {
        console.log("Error in signing up user", err);
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const response = await userModel.findOne({ username, password });
        if (!response) {
            res.status(500).send("Invalid user credentials");
        }
        res.status(200).send(response);
    } catch (err) {
        console.log("Login failed", err);
    }
});

app.post('/visitor', async (req, res) => {
    try {
        const visitor = {
            Purpose: req.body.Purpose,
            WithWhom: req.body.WithWhom,
            TimeDate: req.body.TimeDate,
            Company: req.body.Company,
            Duration: req.body.Duration
        };
        const response = await Model.create(visitor);
        res.status(200).send(response);
    } catch (err) {
        console.log("Error in creating entry", err);
    }
});

app.get('/visitor/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const visitor = await Model.findById({ _id: id });
        res.status(200).send(visitor);
    } catch (error) {
        console.log(error);
    }
});

app.put('/visitorUpdate/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const response = await Model.findByIdAndUpdate({ _id: id }, {
            WithWhom: req.body.WithWhom,
            TimeDate: req.body.TimeDate
        });
        res.status(200).send(response);
    } catch (err) {
        console.log("Error in updating entry", err);
    }
});

app.delete('/delete/:id', async (req, res) => {
    try {
        const deletedData = await Model.findByIdAndDelete({ _id: req.params.id });
        if (!deletedData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        console.log('Data deleted:', deletedData);
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (err) {
        console.error('Error in DELETE request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/auth', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }
        if (username.length < 4 || password.length < 6) {
            return res.status(400).json({ error: 'Username must be at least 4 characters long and password must be at least 6 characters long' });
        }
        const user = { username, password };
        const ACCESS_TOKEN = jwt.sign(user, process.env.ACCESS_TOKEN);
        res.cookie('token', ACCESS_TOKEN, { maxAge: 365 * 24 * 60 * 60 * 1000 });
        res.json({ accessToken: ACCESS_TOKEN });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/', (req, res) => {
    res.send(connectionStatus);
});

app.listen(process.env.PORT, () => {
    startDatabase();
    console.log('success');
});

module.exports = app;
