const express = require('express');
const morgan = require('morgan');
const {PORT, NODE_ENV} = require('./config');
const { success, error, info} = require('consola');
const courseRoute = require("./routes/courseRoute");
const ErrorHandler = require('./middlewares/ErrorHandler');
const connectDb = require('./config/db');

let app = express();



let startServer = async()=>{
    try {
        connectDb();
        if (NODE_ENV === "development"){
            app.use(morgan("dev"));
        }

        // routes should be above error handling middleware
        app.use("./api/course",courseRoute);

        // error handling middleware section
        app.use(ErrorHandler);


        app.listen(PORT, err => {
            if (err) throw err;
            info(`web spider app is running on ${PORT}`);
        });}
        catch (err){
            error(err);

        }
    }   

startServer();