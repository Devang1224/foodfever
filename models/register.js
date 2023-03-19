const mongoose = require('mongoose')

const schema = mongoose.Schema

const Register = new schema({

 name:{
             type:String,
             required: true
       },
 email:{
       type:String,
       required: true
        },
        
password:{
        type:String,
        required: true
        }


})

module.exports = mongoose.model("register",Register,"register")