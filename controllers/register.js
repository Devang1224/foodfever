const Register = require('../models/register')

exports.UserRegistration=(req,res)=>{

const findUser={
    name:req.body.name,
    email:req.body.email,

}

Register.find(findUser)
    .then((result)=>{
    
        if(result.length==0){

            const regis = new Register({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password

               })
        
         regis.save().then((result)=>{
             res.status(200).json({
                   UserData:result,
                    status:1
                })
         }).catch((err)=>{
            res.status(500).json({
                message:"data fetching failed",
                Error:err
               })
           })


        }
        else{
              res.status(400).json({
                message:"Already registered",
                data:result,
                status:0
               })
            }
})

}