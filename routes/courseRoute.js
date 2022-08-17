const { Router } = require('express');
const express = require('express');
const { createCourseController } = require("../controllers/courseController")
const router = express.Router();

router.post("/create-course", createCourseController)