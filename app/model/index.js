const {Sequelize} = require("sequelize");
const {DB, HOST, PASSWORD, USER, dialect} = require("../configs/db.configs");
const {createStudentModel} = require("../model/student.model");
const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host : HOST,
    dialect : dialect,
});
const Student = createStudentModel(sequelize);

//Đồng bộ
module.exports = {sequelize,Student,};
