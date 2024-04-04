const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const {Model} = require("./Schema")
const {userModel} = require("./Meetschema")

app.use(express.json())

let connectionStatus = 'disconnected';

const startDatabase = async () => {
    try {
        await mongoose.connect('mongodb+srv://adiaborhade:admin@cluster0.x34vplz.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0');
        connectionStatus = "The database has been connected!!";
    } catch (err) {
        console.error("Failed to connect to database");
        connectionStatus = "Failed to connect to database";
        console.log('error',err)
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
        res.status(500).send(err)
        console.log(err);
    }
})

app.post('/signup',async (req,res)=>{
    try{
            const user = {
                username: req.body.username,
                password: req.body.password
            }

            const response = await userModel.create(user)
            res.status(200).send(response)
    }
    catch(err){
        console.log("error:",err)
    }
})

app.post('/login',async (req,res)=>{
    try{
            const {username,password} = req.body
            const response = await userModel.findOne({username,password})
            if(!username){
                res.status(500).send("invalid user credentials")
            }
            
            res.status(200).send(response)
    }
    catch(err){
        console.log("error:",err)
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