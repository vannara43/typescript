"use strict";
var LanguagesKnown2;
(function (LanguagesKnown2) {
    LanguagesKnown2[LanguagesKnown2["English"] = 0] = "English";
    LanguagesKnown2[LanguagesKnown2["Hindi"] = 1] = "Hindi";
    LanguagesKnown2[LanguagesKnown2["Tamil"] = 2] = "Tamil";
})(LanguagesKnown2 || (LanguagesKnown2 = {}));
let student3 = {
    Name: "StudentName",
    Age: 30,
    Phone: 123213,
    Language: LanguagesKnown2.Tamil
};
let studentsList3 = [
    { Name: "Jack", Age: 22, Phone: 12312, Language: LanguagesKnown2.English },
    { Name: "Marry", Age: 20, Phone: 43322, Language: LanguagesKnown2.Hindi }
];
studentsList3.push(student3);
// for (let index = 0; index < studentsList.length; index++) {
//     const element = studentsList[index];
//     console.log(element);
// }
function GetStudentsList(students) {
    students.forEach(element => {
        console.log(element);
    });
}
GetStudentsList(studentsList3);
//REST parameters
function GetNumbers(...nums) {
    nums.forEach(element => {
        console.log("number: ", element);
    });
}
GetNumbers(1, 2, 3, 4, 5, 6);
//Default Parameters
function GetInfo(info = "HappyString") {
    console.log(info);
}
GetInfo();
//# sourceMappingURL=function.js.map