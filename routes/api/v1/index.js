const express = require('express');
const router = express.Router();

const registerUser = require('../../../controllers/registerUser');
const fetchEmployee = require('../../../controllers/fetchEmployee');
const deleteEmployee = require('../../../controllers/deleteEmployee');
const updateEmployee = require('../../../controllers/updateEmployee');


router.use('/registerEmployee', require('./registerUser_api'));
router.use('/fetchEmployee', require('./fetchUser_api'));
router.use('/updateEmployee', require('./updateUser_api'));
router.use('/deleteEmployee', require('./deleteUser_api'));

module.exports = router;