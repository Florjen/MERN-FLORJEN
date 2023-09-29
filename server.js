require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const workoutRouter = require('./routes/workouts')

const app = express()

//Middlewares
require("dotenv").config()
app.use(express.json())

app.use((req,res,next) =>{
console.log(req.path,req.method)
next()
})
//app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use('/api/workouts',workoutRouter)


//Lidhja me databasen 
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(process.env.PORT,() =>{
        console.log("connect to db listenening on port ",process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})

