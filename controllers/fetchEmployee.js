// const con = require('../config/mysql');

const user = require('../models/userSchema');



module.exports.fetchEmployee =  (req,res) => {


    user.find({},(err,result)=> {
        if(err)
        {
            console.log('Error ' + err);
            res.status(400).json("Something went wrong, either id is not correct or record is already deleted");
            
        }
        else
        {
            console.log(result);
            res.status(200).json(
                result
            )
        }
   
       })
   

}

