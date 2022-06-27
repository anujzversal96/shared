// const con = require('../config/mysql');
const user = require('../models/userSchema');



module.exports.deleteEmployee =  (req,res) => {
  
    const {_id} = req.params;

    try {
    

/* Used MongoDB as DB with mongoose as ORM */




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
   
       });




/* Used Mysql as DB  */


//   let sql = "Delete from employees where _id = '" + _id + "' ";

//     con.query(sql,(err,result)=> {
//         if(err)
//         res.status(500).json("Error");
        
//         if(result.affectedRows)
//         {
//             res.status(200).json({message: "Employee deleted successfully."});
//         }
//         else{
//             res.status(200).json({message: "User doesn't exist."});
//         }
       

//     });

  } catch (error) {

    console.log("Error: "+ error);

    res.status(500).json({message: error})
    
  }
   

}

