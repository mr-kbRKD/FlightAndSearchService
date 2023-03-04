const express = require('express');

const {PORT} = require('./Config/ServerConfig');

// require('dotenv').config() // not working directly in my case IDK

const setupAndStartServer = async () =>{
    // create the express obj
    const app = express();
    // const PORT = 3000;

    app.listen(PORT, ()=>{
        console.log(`Server started running at ${PORT}`);
        // console.log(process.env);
    });
}

setupAndStartServer();