require("dotenv").config();
const mysql2 = require("mysql2");

const db = mysql2.createConnection({
    host : process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

const connection = async() =>{
    try {
        await db.connect(function(err,result){
            if(!err){
                console.log('Database Connected...');
            }else{
                console.log(`Error Connecting to Database ${err}`);
            }
        })
        
    } catch (error) {
        console.log("Internal Server Error");
    }
};

module.exports = {
    db:db.promise(), connection
}