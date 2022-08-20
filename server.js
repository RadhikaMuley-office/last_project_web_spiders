const express =require('express');
const {engine}=require('express-handlebars')
const app=express()
const Handlebars=require('handlebars');
const methodOverride=require('method-override');
const morgan=require('morgan')
const {success,error,info}=require('consola')
const connectDb=require('./config/db')
const {PORT,NODE_ENV}=require('./config/index')
const errorHandler=require('./middlewares/errorhandling')
//router catch section starts here
const multer = require("multer");
const courseRoute=require('./routes/courseRoute');
const authRoute = require('./routes/authRoute');

//router catch section ends here


//middleware section starts here

// app.use(express.static(__dirname+'/public'));

//method override
// app.use(methodOverride('_method'))

//middleware section ends here




//base url starts here

//base url ends here



//mount section starts here


//mount section ends here






//node js server starts here
let starsserver=async()=>{
    try {
        connectDb()
        if(NODE_ENV === "development"){
            app.use(morgan("dev"))
        }
        app.use('/api/course',courseRoute)
        //mount route always above
        app.use(express.json())
        app.use(express.urlencoded({extended:true}))
      

        // mount route middleware
        app.use('/api/course',courseRoute);
        app.use("/api/auth",authRoute);
        
        //error middleware section always below
        app.use(multer);
        app.use(errorHandler)
        app.listen(PORT,err=>{
            if(err) throw err;
            info(`web spider app running on ${PORT}`)
        })
    } catch (error) {
        
    }
}
starsserver()
//node js server ends here