import express from 'express'
import cors from 'cors'

import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'



// app configure
const app = express();
 const port = 4000

 //middleware
 app.use(express.json())

 app.use(cors())

 //DB CONNECTION

 connectDB();

 // api endpoint 

 app.use("/api/food", foodRouter)
 app.use("/image",express.static('uploads'))



 //request and response / is here end point when we hit the end point we will get the msg of Api is working 
 app.get("/", (req, res)=>{
    res.send("Api Working")
 })

 app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
 })

 