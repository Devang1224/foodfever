const mongoose=require('mongoose')

const schema = mongoose.Schema

const menu = new schema({
    restaurantId:{
        type:String,
        required: true
    },
    itemPrice:{
        type:Number,
        required: true
    },
    itemName:{
        type:String,
        required: true
    },
    itemDescription:{
        type:String,
        required: true
    },
    isVeg:{
        type:Boolean,
        required: true
    },
    restaurantName:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Menu',menu,'Menu')