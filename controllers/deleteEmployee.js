// const con = require('../config/mysql');

const user = require('../models/userSchema');



module.exports.deleteEmployee =  (req,res) => {
  
    const {_id} = req.params;

    if(_id.toString().length < 24 || _id.toString().length > 24)
    {
        res.status(500).json({message: "Please enter valid id"});
        return;
    }



    user.findByIdAndDelete(_id,(err,result)=> {
        if(err)
        {
            console.log('Error ' + err);
            res.status(500).json({message: 
                "Something went wrong, either id is not correct or record is already deleted"});
            
        }
        else
        {
            if(result)
            {
            console.log(`User with name ${result?.name} is deleted sucessfully`);
            res.status(200).json({message : `User with Name ${result?.name} is deleted sucessfully`});
            }
            else
            {
                res.status(404).json({message: `user doesn't exist`});
            }
        }
   
       })
   

}

