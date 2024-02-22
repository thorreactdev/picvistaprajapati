const { db } = require("../utils/db");
const jwt = require("jsonwebtoken");
const bcrypt= require("bcrypt");

//registration logic backend
const userDetails = async(req,res) =>{
    const {firstname, email , password} = req.body;
    try {
        const [userExisiting] = await db.query("SELECT * FROM userdata WHERE email=?",[email]);
        if(userExisiting.length > 0 ){
            return res.status(500).json({message:"Email already exists Kindly Login"});
        }
    
        const hashPassword = await bcrypt.hash(password, 10);
        await db.query("INSERT INTO userdata (firstname , email , password) VALUES(?,?,?)",[firstname,email,hashPassword]);
        const token = jwt.sign({email} , process.env.SECRET_KEY, {expiresIn:"2d"});
        console.log(token);
        res.status(200).json({message:"Registartion Sucessfull" , token , email});
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"Internal Server Error"});  
    }

};

const userLogin = async(req,res) =>{
    const {email , password} = req.body;
    try {
        const [userExists] = await db.query("SELECT * FROM userdata WHERE email=?",[email]);
        console.log("user Exists" , userExists);
        if(!userExists.length){
            return  res.status(401).json({message : "Invalid Credentials!"});
        }
        if(!email){
            return res.status(401).json({message:"Invalid Email"})
        }
        const storeHashPassword = userExists[0].password;
        const validPass = await bcrypt.compare(password,storeHashPassword);
        if(!validPass){
            return res.status(401).json({message:"Invalid Password"});
        }
        const token = jwt.sign({ID :userExists[0].ID,email}, process.env.SECRET_KEY ,{expiresIn :"2d"});
        res.status(200).json({message:"Login Sucessfull" , token : token});
        console.log(token);
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"Internal Server Error"});   
    }

};

const userInfo = async(req,res)=>{
    const userinfo = req.user;
    res.status(200).json(userinfo);
    console.log("userinfo" , userinfo);

};

module.exports = { userDetails , userLogin ,userInfo };