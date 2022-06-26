const express = require('express');
const router = express.Router();


const deleteEmployee = require('../../../controllers/deleteEmployee');

router.delete('/:_id', deleteEmployee.deleteEmployee);




module.exports = router;