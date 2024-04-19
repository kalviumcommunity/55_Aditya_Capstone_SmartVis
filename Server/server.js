const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const {Model} = require("./Schema")
const {userModel} = require("./Meetschema")

var cors = require('cors')

app.use(cors())

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
        console.log("Error in fetching data");
    }
})

app.post('/signup',async (req,res)=>{
    try{
            const user = {
                username: req.body.username,
                password: req.body.password
            }

            const response = await userModel.create(user)
            res.status(200).send(response);
    }
    catch(err){
        console.log("Error in signing up user",err);
    }
})

app.post('/login',async (req,res)=>{
    try{
            const {username,password} = req.body
            const response = await userModel.findOne({username,password})
            if(!response){
                res.status(500).send("invalid user credentials")
            }
            
            res.status(200).send(response)
    }
    catch(err){
        console.log("Login failed",err);
    }
})

app.post('/visitor',async (req,res)=>{
    try{
            const visitor = {
                Purpose: req.body.Purpose,
                WithWhom: req.body.WithWhom,
                TimeDate: req.body.TimeDate,
                Company: req.body.Company,
                Duration:req.body.Duration
            }

            const response = await Model.create(visitor)
            res.status(200).send(response);
    }
    catch(err){
        console.log("Error in creating entry",err);
    }
})

app.get('/visitor/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const visitor = await Model.findById({_id:id});
        res.status(200).send(visitor)

    } catch (error) {
        console.log(error)
    }
})

app.put('/visitorUpdate/:id',async (req,res)=>{
    try{    
            const id = req.params.id
            const response = await Model.findByIdAndUpdate({_id:id},{
                WithWhom: req.body.WithWhom,
                TimeDate: req.body.TimeDate
            })
            res.status(200).send(response);
    }
    catch(err){
        console.log("Error in creating entry",err);
    }
})

app.post('/auth', async(req,res) => {
    try{const {username,password} = req.body
    const user = {
        "username" : username,
        "password" : password
    }
    const ACCESS_TOKEN = jwt.sign(user,fd53388c65ed385e07076171af3a3b3e9b3bab072730ea154bfc992e43c1aaafa976de6f320a3a32cc0c4380afc7a4b64a79395f68eaacff40b945e594dff80e)
    res.cookie('token',ACCESS_TOKEN,{maxAge:365*24*60*60*1000})
    res.json({"acsessToken" : ACCESS_TOKEN})
}catch(err){
    console.error(err)
    res.status(500).json({error:'Internal Server Error'})
}
});


app.get('/',(req,res)=>{
    res.send(connectionStatus)
})

app.listen(process.env.PORT,()=>{
    startDatabase()
    console.log('success')
})

module.exports = app
