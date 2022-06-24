// const con = require('../config/mysql');

const user = require('../models/userSchema');



module.exports.deleteEmployee =  (req,res) => {
    const {_id} = req.body;

    if(_id.toString().length < 24 || _id.toString().length > 24)
    {
        res.json("Please enter valid id");
        return;
    }




    user.findByIdAndDelete(_id,(err,result)=> {
        if(err)
        {
            console.log('Error ' + err);
            res.status(400).json("Something went wrong, either id is not correct or record is already deleted");
            
        }
        else
        {
            console.log(`User with name ${result.name} is deleted sucessfully`);
            res.status(200).json(`User with ${result.name} is deleted sucessfully`);
        }
   
       })
   

}

