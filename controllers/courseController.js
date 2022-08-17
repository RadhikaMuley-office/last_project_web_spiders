const CourseSchema = require ("../models/CourseModel");
const ErrorResponse = require("../utils/ErrorResponse")

/* @ACCESS private
@http verbs POST
@URL /api/course/create-course

This is post request
*/

exports.createCourseController = (req, res, next)=>{
   try{res.send("ok")}
   catch(err){next(new ErrorResponse("Internal Server Error",500))}
};