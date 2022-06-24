const express = require('express');
const router = express.Router();

const registerUser = router.use('/v1', require('./v1'))

module.exports = router;