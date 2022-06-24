const express = require('express');
const router = express.Router();


const fetchEmployee = require('../../../controllers/fetchEmployee');

router.post('/', fetchEmployee.fetchEmployee);




module.exports = router;