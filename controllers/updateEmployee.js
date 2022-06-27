// const con = require('../config/mysql');
const user = require('../models/userSchema');



module.exports.updateEmployee =  (req,res) => {



    try {
        

    // body must not be empty.
    if(Object.keys(req.body).length === 0)
    {
        res.status(500).json({message: "Empty body is not allowed."});
        return;
    }

    var keys = Object.keys(req.body);


    // check for all required body field must be present with valid value.
    if(!(keys.includes("name") 
    && keys.includes("address") 
    && keys.includes("department") 
    && keys.includes("contactInfo")))
    {
        res.status(500).json({message: "All required field must be present."});
        return;
    }

    const {name,address,department,contactInfo} = req.body;
    const {_id} = req.params;

    if(_id.toString().length < 24 || _id.toString().length > 24)
    {
        res.json("Please enter valid id");
        return;
    }


    if(Number.isInteger(name) || name === "" || name === null || name === undefined)
    {
        res.status(500).json({message: "There must be a valid name as string"});
        return;
    }
    else if(Number.isInteger(address) || address === "" || address === null || address === undefined)
    {
        res.status(500).json({message: "Enter valid address please."});
        return;
    }
    else if(Number.isInteger(department) || department === "" || department === null || department === undefined)
    {
        res.status(500).json({message: "Enter valid department please."});
        return;
    }
    else if(Number.isInteger(contactInfo) || contactInfo === "" || contactInfo === null || contactInfo === undefined ||contactInfo.length < 10 || contactInfo.length > 10) 
    {
        res.status(500).json({message: "Enter valid 10 digit mobile number as string"});
        return;
    }



    user.findByIdAndUpdate(_id,{name:name, address:address, department: department, contactInfo: contactInfo},(err,result)=> {
        if(err)
        {
            console.log('Error ' + err);
            res.status(500).json("Something went wrong, either id is not correct or record is already deleted");
            
        }
        else
        {

            if(result)
            {
                res.status(200).json("Employee updated successfully.");
            }
            else
            {
                // if employee id doesn't match.
                res.status(404).json("Employee doesn't exist.");
            }
            

            console.log(result)
        }
   
       }).lean();



 
    
    // let sql = "update employees set name = '"+ name +"', address = '"+ address +"', department = '"+ department +"', contactInfo = '"+ contactInfo +"' where _id = '" + _id + "'";

    // con.query(sql,(err,result)=> {
    //     if(err)
    //     res.status(500).json("Error");

    //     res.status(200).json({message: "Employees updated successfully", result});

    // });

} catch (error) {

    console.log("Error: " + error);
    res.status(500).json({message: error});
        
}
   

}

