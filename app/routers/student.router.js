const express = require("express");
const studentRouter = express.Router();
const {getStudentList , getStudentDetailById,createStudent, updateStudentById,deleteStudentById } = require("../controllers/student.controller");
const {logFeature} = require ("../middlewares/logger/log-featuter");
const{checkEmpty} = require("../middlewares/validations/student.validation");

   //lấy danh sách học sinh (url: http://localhost:3000/students)
   studentRouter.get("/", logFeature, getStudentList);
   
   //lấy thông tin chi tiết học sinh
   studentRouter.get("/:id", getStudentDetailById);
   
   //thêm học sinh
   studentRouter.post("/",checkEmpty,createStudent);
   
   //cập nhật học sinh
   studentRouter.put("/:id", updateStudentById);

   //xóa học sinh
   studentRouter.delete("/:id",deleteStudentById);


   module.exports = studentRouter;