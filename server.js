const express = require('express');
const morgan = require('morgan');
const { success, error, info} = require('consola');
const courseRoute = require("./routes/courseRoute");
const ErrorHandler = require('./middlewares/ErrorHandler');
const connectDb = require('./config/db');
const {PORT, NODE_ENV} = require('./config/index');
const multer = require("multer");

const app = express();



let startServer = async()=>{
    try {
        connectDb();
        if (NODE_ENV === "development"){
            app.use(morgan("dev"));
        }

        app.use(express.json());
        app.use(express.urlencoded({extended:true}))

        // routes should be above error handling middleware
        app.use("/api/course",courseRoute);

        // error handling middleware section
        app.use(multer);
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