const express = require('express');
const bodyParser = require("body-parser");
const {PORT} = require('./Config/ServerConfig');
const {db} = require('./models/index');
const CityRepository = require("./Repository/City-repos")

// require('dotenv').config() // not working directly in my case IDK

const setupAndStartServer = async () =>{
    // create the express obj
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT, ()=>{
        console.log(`Server started running at ${PORT}`);
        // console.log(db.City);
        const repo = new CityRepository();
        repo.createCity({name:"Ambala Cantt"});
    });
}

setupAndStartServer();