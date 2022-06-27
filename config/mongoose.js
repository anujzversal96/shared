const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.MongoDB_Connection, {
    useNewUrlParser: true}
);


const db = mongoose.connection;

db.on('error', console.error.bind('console', 'Error in connecting with DB'));

db.once('open', ()=> {
    console.log("Connected to database");
})