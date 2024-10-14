// 1 import mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeManagementSystem')

// create a modal
const Employee = mongoose.model('Employee',{
    id:Number,
    name:String,
    age:Number,
    designation:String,
    salary:Number
})

// export modal 
module.exports = {
    Employee

}

