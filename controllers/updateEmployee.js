// const con = require('../config/mysql');

const user = require('../models/userSchema');



module.exports.updateEmployee =  (req,res) => {
    const {_id,name,address,department,contactInfo} = req.body;

    if(_id.toString().length < 24 || _id.toString().length > 24)
    {
        res.json("Please enter valid id");
        return;
    }

    const contactLength = contactInfo.toString().length;

    if(Number.isInteger(parseInt(name)))
    {
        res.json("Enter valid name please.");
        return;
    }
    else if(Number.isInteger(parseInt(address)))
    {
        res.json("Enter valid address please.");
        return;
    }
    else if(Number.isInteger(parseInt(department)))
    {
        res.json("Enter valid department please.");
        return;
    }
    else if(isNaN(contactInfo) || contactLength < 10 || contactLength > 10)
    {
        res.json("Enter valid mobile number please");
        return;
    }



    user.findByIdAndUpdate(_id,{name:name, address:address, department: department, contactInfo: contactInfo},(err,result)=> {
        if(err)
        {
            console.log('Error ' + err);
            res.status(400).json("Something went wrong, either id is not correct or record is already deleted");
            
        }
        else
        {
            res.status(200).json("User updated successfully");

            console.log(result)
        }
   
       }).lean();
   

}

