const express = require('express')
const app = express()
const connection = process.env.URI;
const mongoose = require('mongoose')
require('dotenv').config()
const {Model} = require("./Schema")

app.use(express.json())

let connectionStatus = 'disconnected';

const startDatabase = async () => {
    try {
        await mongoose.connect(connection);
        connectionStatus = "The database has been connected!!";
    } catch (err) {
        console.error("Failed to connect to database");
        connectionStatus = "Failed to connect to database";
    }
};

app.get('/data',async(req,res)=>{
    try{
        console.log(Model)
        const data = await Model.find();
        console.log(data);
        res.status(200).send(data)
    }
    catch(err){
        res.status(401).send(err)
        console.log(err);
    }
})

app.get('/',(req,res)=>{
    res.send(connectionStatus)
})

app.listen(process.env.PORT,()=>{
    startDatabase()
    console.log('success')
})

module.exports = app