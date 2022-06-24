// const con = require('../config/mysql');

const user = require('../models/userSchema');



module.exports.fetchEmployee =  (req,res) => {
    const {_id} = req.body;

    if(_id.toString().length < 24 || _id.toString().length > 24)
    {
        res.json("Please enter valid id");
        return;
    }




    user.findById(_id,(err,result)=> {
        if(err)
        {
            console.log('Error ' + err);
            res.status(400).json("Something went wrong, either id is not correct or record is already deleted");
            
        }
        else
        {
            console.log('Employee Registered');
            res.status(200).json({
                name: result.name,
                address: result.address,
                department: result.department,
                contactInfo: result.contactInfo
            })
        }
   
       })
   

}

