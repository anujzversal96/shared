const express = require('express');
const router = express.Router();

const registerUser = router.use('/api', require('./api'))

module.exports = router;