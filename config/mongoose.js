const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ranaanuj290:anuj84710%40@cluster0.2icgk.mongodb.net/employeeDB", {
    useNewUrlParser: true}
);


const db = mongoose.connection;

db.on('error', console.error.bind('console', 'Error in connecting with DB'));

db.once('open', ()=> {
    console.log("Connected to database");
})