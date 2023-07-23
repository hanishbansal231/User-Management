const express = require('express');
const router = express.Router();

const {userRegister,login} = require('../controller/userController');

router.post('/userRegister',userRegister);
router.post('/login',login);

module.exports = router;