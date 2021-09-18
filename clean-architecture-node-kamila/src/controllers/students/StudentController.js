const AddStudent = require('../../application/use_cases/StudentsAdd');
const GetAllStudents = require('../../application/use_cases/StudentGetAll');
const GetStudent = require('../../application/use_cases/StudentGet');

module.exports = (dependecies) => {

    const { studentRepository } = dependecies.DatabaseService;
    const { CrmServices } = dependecies;

    const addNewStudent = (req, res, next) => {
       
        const AddStudentCommand = AddStudent(studentRepository, CrmServices);
       
        const { firstName, lastName, email } = req.body;
       
        AddStudentCommand.Execute(firstName, lastName, email).then((response) => {
            res.json(response);
        }, (err) => {
            next(err);
        });
    };

    const getAllStudents = (req, res, next) => {
       
        const GetAllStudentsQuery = GetAllStudents(studentRepository);

        GetAllStudentsQuery.Execute().then((students) => {
            res.json(students);
        }, (err) => {
            next(err);
        });
    };

    const getStudent = (req, res, next) => {
        const GetStudentQuery = GetStudent(studentRepository);

        GetStudentQuery.Execute(req.params.studentId).then((student) => {
            res.json(student);
        }, (err) => {
            next(err);
        });
    };

    return {
        addNewStudent,
        getAllStudents,
        getStudent
    };
};
