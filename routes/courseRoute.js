const express=require('express')

const{courseCreateController, courseFindAllController,updateACourseController,deleteACourse}=require('../controller/courseController')
const multer=require('multer')
const {storage}=require('../middlewares/multer')
let upload=multer({storage,})

const router=express.Router()


// create route
//upload.any is used to eject multer INTO THE ROUTE while sending files to the
// database. it is not used while recieving data from database.
// upload.any("files") <- THIS IS MULTER EJECTION
router.post('/create-course',upload.any("files"), courseCreateController); 


// FETCH DATA
router.get("/get-all-courses", courseFindAllController);


// UPDATE DATA
router.put("/update-a-course", upload.any("files"), updateACourseController);


// DELETE DATA
router.delete("/:id", deleteACourse);




module.exports=router;

















// const { Router } = require('express');
// const express = require('express');
// const { createCourseController } = require("../controllers/courseController");
// const { storage } = require('../middlewares/multer');

// const router = express.Router();

// router.post("/create-course", createCourseController);


// module.exports=router;