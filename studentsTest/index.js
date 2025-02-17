// const fs = require("fs").promises;
// const path = require("path");
// const { nanoid } = require("nanoid");

// const studentsPath = path.join(__dirname, "students.json");

// const getStudentsList = async () => {
//   const data = await fs.readFile(studentsPath);

//   return JSON.parse(data);
// };

// const getStudentById = async (id) => {
//   const students = await getStudentsList();
//   const result = students.find((student) => student.id === id);

//   return result || null;
// };

// const addStudent = async (data) => {
//   const students = await getStudentsList();
//   const newStudent = {
//     id: nanoid(),
//     ...data,
//   };

//   students.push(newStudent);

//   await fs.writeFile(studentsPath, JSON.stringify(students, null, 2));

//   return newStudent;
// };

// const updateStudentById = async (id, data) => {
//   const students = await getStudentsList();
//   const index = students.findIndex((student) => student.id === id);

//   if (index === -1) {
//     return null;
//   }

//   students[index] = { id, ...data };

//   await fs.writeFile(studentsPath, JSON.stringify(students, null, 2));

//   return students[index];
// };

// const deleteStudentById = async (id) => {
//   const students = await getStudentsList();
//   const index = students.findIndex((student) => student.id === id);

//   if (index === -1) {
//     return null;
//   }

//   const [result] = students.splice(index, 1);

//   await fs.writeFile(studentsPath, JSON.stringify(students, null, 2));

//   return result;
// };

// module.exports = {
//   getStudentsList,
//   getStudentById,
//   addStudent,
//   updateStudentById,
//   deleteStudentById,
// };
