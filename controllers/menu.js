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


// exports.addMenuItem = async(req,res)=>{
   
//     try{
    
//       const body = req.body.restaurantName;

//       const findRestaurant = await Menu.findOne({
//         restaurantName:body
//       });
     
//       if(!findRestaurant)
//      {
//         //push 
     

     
//     const menuArray = 
//     [
//         {
//             itemPrice: 189,
//             itemName: "Masala Dosa",
//             itemDescription: "Crispy rice crepe filled with spiced potato filling",
//             isVeg: true
//         },
//         {
//             itemPrice: 149,
//             itemName: "Idli Sambar",
//             itemDescription: "Steamed rice cakes served with lentil stew",
//             isVeg: true
//         },
//         {
//             itemPrice: 169,
//             itemName: "Uttapam",
//             itemDescription: "Thick rice pancake topped with vegetables",
//             isVeg: true
//         },
//         {
//             itemPrice: 259,
//             itemName: "Chettinad Chicken Curry",
//             itemDescription: "Spicy chicken curry with a blend of South Indian spices",
//             isVeg: false
//         },
//         {
//             itemPrice: 139,
//             itemName: "Coconut Chutney",
//             itemDescription: "Chutney made with grated coconut and spices",
//             isVeg: true
//         },
//         {
//             itemPrice: 179,
//             itemName: "Pongal",
//             itemDescription: "Rice and lentil dish cooked with black pepper and cumin",
//             isVeg: true
//         },
//         {
//             itemPrice: 299,
//             itemName: "Hyderabadi Biryani",
//             itemDescription: "Fragrant rice dish with marinated meat or vegetables",
//             isVeg: false
//         },
//         {
//             itemPrice: 129,
//             itemName: "Vada",
//             itemDescription: "Fried lentil doughnut",
//             isVeg: true
//         },
//         {
//             itemPrice: 299,
//             itemName: "Fish Curry",
//             itemDescription: "Fish cooked in a tangy coconut-based gravy",
//             isVeg: false
//         },
//         {
//             itemPrice: 219,
//             itemName: "Rasam",
//             itemDescription: "Spicy South Indian soup",
//             isVeg: true
//         }
//     ]
//        const newMenuItem = new Menu({
//         restaurantId:"6143001fa53g2f215d267adm",
//         menuItems:menuArray,
//         restaurantName:"Rajinder Da Dhaba"
//        })
 
//        const savedItem = await newMenuItem.save();
//        res.send(savedItem);

//     }
//     else{
//         res.status(200).json("found");
//     }
   
//     }
//     catch(err)
//     {
//     res.status(400).json(err)

//     }
// }