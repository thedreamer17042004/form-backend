const express = require('express');
const router = express.Router();
const {Signup} = require('../controller/userCtrl');

router.post('/register', Signup);

module.exports = router;