const CourseSchema = require ("../models/CourseModel");
const ErrorResponse = require("../utils/ErrorResponse")

/* @ACCESS private
@http verbs POST
@URL /api/course/create-course

This, below is old post request it does not work.
*/

// exports.createCourseController = (req, res, next)=>{
//    try{
//       let image = req.files[0];
//       let video = req.files[0];
//       let body = req.body;
//       let  data = (image,video,body)
//       let payload= new CourseSchema(data).save()
//       res.status(200 )
//       // res.send("ok")}
//    }catch(err){next(new ErrorResponse("Internal Server Error",500))}
// };

// below are new CRUD requestS. THEY work.


exports.courseCreateController=async (req,res,next)=>
{
    try {
       console.log(req.body);
      let course_image=req.files[0]
      let course_video = req.files[1];
      // let payload = {...req.body, course_image,course_video}
      let { course_id, course_name, course_language,
            course_description, course_subject, course_branch, 
            course_trainer, course_duration, course_category
          }
        =req.body;

      let data={ course_name, course_id, course_language, 
                 course_trainer, course_duration, course_category,
                 course_image, course_video, course_branch, 
                 course_subject, course_description
              }
      console.log(data);//to check
    await new CourseSchema(data).save();
    // res.end('ok, your data is sent/saved to the database');
        // console.log(data); //TO CHECK
        res.send('ok, The DATA is SENT SUCCESSFULLY TO THE DATABASE');
        } 
    catch (err) 
        {
          console.log(err)
        next(new ErrorResponse('There is an error while sending data to database',500))
        }
}

exports.courseFindAllController = async(req, res, next) => 
{
    try{
        let payload = await CourseSchema.find({})
        res.status(200).json({success:true, payload,message:"data fetched from database"})
        }
    catch(error)
    {
        console.log(error)
    }
}
/*
@access private
@http verbs PUT
@url /api/course/delete-course
*/

exports.updateACourseController = async(req, res, next) =>
{
  try
  { 
    let course_image = req.files[0];
    let course_video = req.files[1];
    // destructure payload
    let payload = {...req.body, course_image,course_video};
    await CourseSchema.updateOne({_id:req.params.id},{$set:payload});
    res.status(202).json({success:true, payload, message:"data UPDATED successfully in the database"})
  }
  catch(error)
  { console.log(error);
    next(new ErrorResponse("FAILED TO UPDATE THE COURSE IN THE DATABASE",500))
  }
}

/*
@access private
@http verbs DELETE
@url /api/course/delete-course
*/

exports.deleteACourse = async ( req, res, next)=>{
  try{
    let deleteACourse = await CourseSchema.deleteOne({_id:req.params.id},{new:true});
    res.status(203).json({success:true, message:`Course ${req.params.id} deleted Successfully`,})
  }
  catch(error){
    console.log(error);
  }
}

