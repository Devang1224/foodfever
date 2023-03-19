const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./routes/restaurants') 
const locationRoutes = require('./routes/location')
const mealTypeRoutes = require('./routes/mealtype')
const menuRoutes = require('../Backend/routes/menu')
const paymentRoutes = require('./routes/payment')
const registerRoutes = require('./routes/register')


const app = express()
const URL = "mongodb+srv://devang12:devang12@cluster0.1yrnmhk.mongodb.net/zomato_60";

app.use(bodyParser.json()); 
app.use(cors())

app.use('/',routes)
app.use('/location',locationRoutes)
app.use('/mealtype',mealTypeRoutes)
app.use('/menu',menuRoutes)
app.use('/payment',paymentRoutes)
app.use('/register',registerRoutes)






mongoose.connect(URL,{ useNewUrlParser: true}
).then(client => {
    // starting the server using the listen function
    app.listen(9098, () => {
        console.log(`Server running at 9098`)
    });
}).catch(err => {
    console.log(err);
})




