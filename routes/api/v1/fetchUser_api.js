const express = require('express');
const router = express.Router();


const fetchEmployee = require('../../../controllers/fetchEmployee');

router.get('/', fetchEmployee.fetchEmployee);




module.exports = router;