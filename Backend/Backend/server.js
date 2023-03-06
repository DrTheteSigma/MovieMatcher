const express = require('express')
const doteenv = require("dotenv").config()
const port = process.env.PORT || 3001


const connectDB = require("./config/db")

connectDB()

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api/room", require('./routes/roomRoutes'))


// middleware 








app.listen(port, ()=>{
    console.log( `Server started on port ${port}`)
   
})