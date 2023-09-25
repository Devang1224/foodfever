const express = require('express')
const mongoose = require('mongoose')
const body = require('body-parser')

//controllers
const city = require('../controllers/location')

const router = express.Router();




router.post('/filter/:pageNo',city.location)
router.get('/restaurantDetails/:name',city.restaurantDetails)
router.get('/restaurants/city/:name',city.getRestaurantsByName)

module.exports = router;
