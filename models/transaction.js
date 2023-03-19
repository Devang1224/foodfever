const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Registering the Restaurant Schema
const transactionSchema = new Schema({

   transaction_id:{
    type: String,
    required:true
   },
   transaction_amount:{
    type:String,
    required:true
   }
   
   
    
    
   
})


module.exports = mongoose.model('Transactions',transactionSchema,'transaction')