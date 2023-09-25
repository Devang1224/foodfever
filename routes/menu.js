const express = require('express')
const mongoose = require('mongoose')
const body = require('body-parser')

//controllers
const MenuController = require('../controllers/menu')

const router = express.Router();



router.get('/:rName',MenuController.getAllMenu)



module.exports = router;
