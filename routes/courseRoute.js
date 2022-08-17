const { Router } = require('express');
const express = require('express');
const { createCourseController } = require("../controllers/courseController");
const { storage } = require('../middlewares/multer');

const router = express.Router();

router.post("/create-course", createCourseController);


module.exports=router;