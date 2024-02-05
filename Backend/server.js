//require Statements or import statement
require("dotenv").config();
const {connection} = require("../Backend/utils/db");
const authRoute = require("../Backend/router/auth-router");
const express = require("express");
const cors = require("cors")


//initialiazation
const app = express();
app.use(cors());
app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  };
app.use(cors(corsOptions));

//routes-definition
app.use("/api/auth" , authRoute);

//connection statement
const port = process.env.PORT;
console.log(port);

connection().then(()=>{
    app.listen(port ,()=>{
        console.log(`Server is running on ${port}`);
    })
});