const mysql = require('mysql');
require("dotenv").config();

const con = mysql.createConnection({
   process.env.Mysql_Connection;
});

con.connect((err)=>{
    if(err)
    {
        console.log(err);
        throw err;
    }
    

    console.log("Connected to mysql!");
})


module.exports = con;