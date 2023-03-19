const Menu = require('../models/menu')

exports.getAllMenu = (req,res)=>{

   Menu.find({restaurantName:req.params.rName}).then(
       (result)=>{res.status(200).json({
           message:"Menu fetched successfully",
           data: result
       })}
       ).catch(
           error=>res.status(500).json({
               message:"DB error occured",
               error: error
           })
       )
}

