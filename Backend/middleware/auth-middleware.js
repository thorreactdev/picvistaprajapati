require("dotenv").config();
const {db} = require("../utils/db");
const jwt = require("jsonwebtoken");
const bcrypt= require("bcrypt");

const authMiddleWare = async(req,res,next) =>{
    const token = req.header("Authorization");
    console.log("Authorization Header:", token); 
    console.log("All Headers:", req.headers);

    if(!token){
        return res.status(400).json({message:"Token Not Found"});
    }
    const jwtToken  = token.replace("Bearer " , "").trim();
    console.log(jwtToken);
    try {
        //Verify the JWT Token
        const isVerified = await jwt.verify(jwtToken , process.env.SECRET_KEY);
        //Getting user data from payload of verified token
        const {email} = isVerified;
        const userData = await db.query("SELECT ID,firstname, email,created_at FROM userdata WHERE email=?",[email]);
        req.user = userData;
        next();
        
    } catch (error) {
        return res.status(400).json({message:"Token Not Found"});
    }


};

module.exports = authMiddleWare;