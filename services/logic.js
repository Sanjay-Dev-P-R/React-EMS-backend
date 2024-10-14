// import db.js
const { response } = require('express')
const db= require('./db')

// get all employees from mongodb
const allEmployee=()=>{
    return db.Employee.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"No data Found"
            }
        }
    })
}

// add all employee details
const addEmployees = (id,name,age,designation,salary)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:"Employees already exists"
            }
        }
        else{
            const newEmployee=new db.Employee({id,name,age,designation,salary})
            newEmployee.save()
            return{
                statusCode:200,
                message:'Employee added succesfully'
            }
        }
    })
}


// delete a particular employee
const deleteEmployee=(id)=>{
    return db.Employee.deleteOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:'Employee deleted successfully'
            }
        }
        else{
            return{
                statusCode:404,
                message:'Employee not found'

            }
        }
    })
}


// get a particular employee from the database
const getAnEmp=(id)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            }
        }
    })

}


// update an employee
const updateAnEmp=(empId,id,name,age,designation,salary)=>{
    return db.Employee.findOne({id:empId}).then((result)=>{
        if(result){
            result.id= id;
            result.name=name;
            result.age=age;
            result.designation=designation;
            result.salary=salary;
            result.save()// to update in mongodb
            return{
                statusCode:200,
                message:'Employee details updated'
            }
        }
        else{
            return{
                statusCode:401,
                message:'Invalid action'
            }
        }
    })
}

module.exports={
    allEmployee,
    addEmployees,
    deleteEmployee,
    getAnEmp,
    updateAnEmp
}