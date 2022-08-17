const CourseSchema = require ("../models/CourseModel")

/* @ACCESS private
@http verbs POST
@URL /api/course/create-course

This is post request
*/

exports.createCourseController = (req, res, next)=>{
    try{
        res.status(201)
            .json({success:true,message:"successfully course created"})
    }
    catch{
        next(err)
        // here we will use error handling middleware
    }
}