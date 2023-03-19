const express = require('express')
const mongoose = require('mongoose')
const body = require('body-parser')

//controllers

const RegisterController = require('../controllers/register')

const router = express.Router();



router.post('/',RegisterController.UserRegistration)



module.exports = router;
