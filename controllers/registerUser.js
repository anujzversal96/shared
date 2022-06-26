// const con = require('../config/mysql');
const user = require('../models/userSchema');



module.exports.registerUser =  (req,res) => {


    // check for empty body.

    if(Object.keys(req.body).length === 0)
    {
        res.status(500).json({message: "Empty body is not allowed."});
        return;
    }

    const {name,address,department,contactInfo} = req.body;
    var keys = Object.keys(req.body);

    // check for all requires fields are present in body and have valid string.

    if(!(keys.includes("name") 
    && keys.includes("address") 
    && keys.includes("department") 
    && keys.includes("contactInfo")))
    {
        res.status(500).json({message: "All required field must be present."});
        return;
    }
    else if(Number.isInteger(name) || name === "" || name === null || name === undefined)
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

 
    //  let sql = "Insert into employees (name,address,department,contactInfo) values('" + name +"', '" + address +"', '" + department +"', '" + contactInfo +"'  )"

    // con.query(sql,(err,result)=> {
    //     if(err)
    //     res.status(400).json("Error");

    //     res.status(200).json({msg: "Data inerted successfully", result: result});

    // });





    user.create({
        name: name,
        address: address,
        department: department,
        contactInfo: parseInt(contactInfo),
       }, (err,result)=> {
        if(err)
        {
            console.log('Error ' + err);
            res.status(500).json({message: "Something went wrong"});
            
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

