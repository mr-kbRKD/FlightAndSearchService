const express = require('express');
const bodyParser = require("body-parser");
const {PORT} = require('./Config/ServerConfig');

// require('dotenv').config() // not working directly in my case IDK

const setupAndStartServer = async () =>{
    // create the express obj
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT, ()=>{
        console.log(`Server started running at ${PORT}`);

    });
}

setupAndStartServer();