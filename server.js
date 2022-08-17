const express = require('express');
const morgan = require('morgan');
const {PORT, NODE_ENV} = require('./config');
const { success, error, info} = require('consola');
let app = express();

let startServer = async()=>{
    try {
        connectDb();
        if (NODE_ENV === "development"){
            app.use(morgan("dev"));
        }
        app.listen(PORT, err => {
            if (err) throw err;
            info(`web spider app is running on ${PORT}`);
        });}
        catch (err){
            error(err);

        }
    }   

