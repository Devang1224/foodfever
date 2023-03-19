const shortid = require('shortid') //for random numbers
const Transactions = require('../models/transaction')
const Razorpay = require('razorpay');
var instance = new Razorpay({ key_id: 'rzp_test_FuqjXQF8QQHDhn', key_secret: 'JEX9Y3ii9IScSpMzMdgnZ1xe' })




exports.createOrder=(req,res)=>{

    
var options = {
  amount: req.body.amount*100,  // amount in the smallest currency unit (paisa)
  currency: "INR",
  receipt: shortid.generate()
};
instance.orders.create(options, function(err, order) {
  
    res.json(order)

});

}


exports.saveTransaction=(req,res)=>{

  const tr = new Transactions({

    transaction_id:req.body.razorpay_payment_id,
    transaction_amount:76


  })

  tr.save(function(err,save){

    if(err)console.log(err);
    else{
    console.log(save);
     }

  })



}