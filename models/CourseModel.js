const { model, Schema} = require('mongoose');

const CourseSchema = new Schema(
    {
    course_name:{type:String, required:[true,"course name is required"]},
    course_id:{type:String, required:[true,"course id is required"]},
    course_language:{type:String, required:[true,"course language is required"]},
    course_trainer:{type:String, required:[true,"course trainer is required"]},
    course_duration:{type:Number, required:[true,"course  Duration is required"]},
    course_category:
    {
        type:String,
        enum:['web development','java development','fullstack development','backend development','ui development','autamation testing'],
        required:[true,"course category is required"]
    },
    course_date:{ 
        type:Date,
        required:[true, "date is required"],
        default: Date.now() 
        },
    course_image:{
        type:[""],
        required: [true,"course image is required"],
        default: "https://www.sdcourses.com/images/default-course-thumbnail.png"
                
    },
    course_video:{type:[""]},
    course_branch:{
        type:String,
        enum:["basvanagudi","rajajinagar","btm Layout","old airport","hebbal","JNTU"
        ],
        required : [true,"Branch is required"]},
    course_timings:{type:Date,required : [true,"Timings is required"],default:Date.now()},
    course_subjects:{type:String,
        enum:[
                "java",
                "javascript",
                "python",
                "nodejs",
                "reactjs",
                "expressjs",
                "angular",
                "selenium",
                "manual testing",
                "unit testing",
                "nextjs",
                "socket.io",
                "swagger",
                "postman"
            ],
    required : [true,"Subjects is required"]
    },
    course_description:
    {
        type:String,
        required : [true,"Description is required"],
        minlength: 100, 
        maxlength:500
    },
},
{timestamps:true}
);

module.exports = model("courses", CourseSchema);
