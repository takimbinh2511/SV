const express = require("express");
const router = express.Router();
const studentRouter = require("./student.router");

//http://localhost:3000/students/
router.use("/students",studentRouter);

module.exports =  router;