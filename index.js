// import express
const express= require('express');

// import cors
const cors = require('cors');

const logic = require('./services/logic')

// create a server application using express
const server =express()


// 4 use cors
server.use(cors({
    origin:'http://localhost:3000'
}))

server.use(express.json())

server.listen(8000,()=>{
    console.log("Listening on the port 8000");
})

//  get all employee api
server.get('/getEmployee',(req,res)=>{
    logic.allEmployee().then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

// add employee
server.post('/addEmployees',(req,res)=>{
    logic.addEmployees(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
        res.status(response.statusCode).json(response)
        
    })
})


// delete employee
server.delete('/deleteEmployee/:id',(req,res)=>{
    logic.deleteEmployee(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})


// get  a  particular employee
server.get('/getAnEmployees/:id',(req,res)=>{
    logic.getAnEmp(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})  


// update an employee details
server.post('/updateAnEmployee/:id',(req,res)=>{
    logic.updateAnEmp(req.params.id,req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})