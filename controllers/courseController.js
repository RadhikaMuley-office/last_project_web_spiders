const CourseSchema = require ("../models/CourseModel");
const ErrorResponse = require("../utils/ErrorResponse")

/* @ACCESS private
@http verbs POST
@URL /api/course/create-course

This is post request
*/

exports.createCourseController = (req, res, next)=>{
   try{
      let image = req.files[0];
      let video = req.files[0];
      let body = req.body;
      let  data = (image,video,body)
      let payload= new CourseSchema(data).save()
      res.status(200 )
      // res.send("ok")}
   }catch(err){next(new ErrorResponse("Internal Server Error",500))}
};