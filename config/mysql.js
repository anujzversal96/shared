const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    port:"3306",
    user: "root",
    password: "",
    database: "employeeDB"
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