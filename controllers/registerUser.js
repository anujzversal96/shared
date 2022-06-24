// const con = require('../config/mysql');
const user = require('../models/userSchema');



module.exports.registerUser =  (req,res) => {
    const {name,address,department,contactInfo} = req.body;

    const contactLength = contactInfo.toString().length;


    //  let sql = "Insert into employees (name,address,department,contactInfo) values('" + name +"', '" + address +"', '" + department +"', '" + contactInfo +"'  )"

    // con.query(sql,(err,result)=> {
    //     if(err)
    //     res.status(400).json("Error");

    //     res.status(200).json({msg: "Data inerted successfully", result: result});

    // });

    if(name === "")
    {
        res.json("Enter valid name please.");
        return;
    }
    else if(address === "")
    {
        res.json("Enter valid address please.");
        return;
    }
    else if(department === "")
    {
        res.json("Enter valid department please.");
        return;
    }
    else if(isNaN(contactInfo) || contactLength < 10 || contactLength > 10)
    {
        res.json("Enter valid mobile number please");
        return;
    }



    user.create({
        name: name,
        address: address,
        department: department,
        contactInfo: parseInt(contactInfo),
       }, (err,result)=> {
        if(err)
        {
            console.log('Error ' + err);
            res.status(400).json("Something went wrong");
            
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

