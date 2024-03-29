const express = require('express')
const router = express.Router()
const bodyParser  = require('body-parser')
const mysql = require('mysql2')
const userController = require('../controllers/user-controllers')
const walletController = require('../controllers/wallet-controller')


router.use(bodyParser.json());

router.post('/register', userController.registerUser);
router.post('/loin', userController.loinUser);
router.post('/wallets', walletController.creatuserwalletdata);

module.exports = router;
