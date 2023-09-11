const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const checkPassword=require('../middleware/check_password')


// route pour la création d'utilisateur ou le login
router.post('/signup', checkPassword, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;
