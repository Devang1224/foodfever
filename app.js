const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const routes = require('./routes/restaurants') 
const locationRoutes = require('./routes/location')
const mealTypeRoutes = require('./routes/mealtype')
const menuRoutes = require('./routes/menu')
const paymentRoutes = require('./routes/payment')
const registerRoutes = require('./routes/register')


const app = express()
const URL = process.env.MONGO_URL;

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
    app.listen(process.env.PORT || 9098, () => {
        console.log(`Server running at ${process.env.PORT}`)
    });
}).catch(err => {
    console.log(err);
})




