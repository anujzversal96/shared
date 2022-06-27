// const con = require('../config/mysql');
const user = require('../models/userSchema');



module.exports.fetchEmployee =  (req,res) => {


try {
    
/* Used MongoDB as DB with mongoose as ORM */



    user.find({},(err,result)=> {
        if(err)
        {
            console.log('Error ' + err);
            res.status(400).json({message: 
                "Something went wrong, either id is not correct or record is already deleted"});
            
        }
        else
        {
            console.log(result);
            res.status(200).json(
                result
            )
        }
   
       });




/* Used Mysql as DB  */




    // let sql = "Select * from employees"

    // con.query(sql,(err,result)=> {
    //     if(err)
    //     res.status(500).json("Error");

    //     res.status(200).json(result);

    // });


} catch (error) {
    console.log("Error: " + error);

    res.status(500).json({message: error});
    
}
   

}

