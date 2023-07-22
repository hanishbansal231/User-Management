const express = require('express');
const router = express.Router();

const {userRegister} = require('../controller/userController');

router.post('/userRegister',userRegister);

module.exports = router;