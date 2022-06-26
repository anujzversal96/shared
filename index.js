const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./config/mongoose');
const app  = express(mongoose);

app.use(cors());
app.use(express.json());



app.use('/', require('./routes'));



app.listen(8080, ()=> {
    console.log("Server is running!");
})