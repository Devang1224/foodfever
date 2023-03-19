const express = require('express')
const mongoose = require('mongoose')
const body = require('body-parser')

//controllers
const PaymentController = require('../controllers/payment')
const registerController = require('../controllers/register')

const router = express.Router();



router.post('/order',PaymentController.createOrder)
router.post('/save',PaymentController.saveTransaction)


module.exports = router;
