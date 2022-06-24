const express = require('express');
const router = express.Router();


const updateEmployee = require('../../../controllers/updateEmployee');

router.patch('/', updateEmployee.updateEmployee);




module.exports = router;