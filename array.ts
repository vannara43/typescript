let student = {
    Name: "StudentName",
    Age: 30,
    Phone: 123213
}

let studentsList = [
    { Name: "Jack", Age: 22, Phone: 12312 },
    { Name: "Marry", Age: 20, Phone: 43322 }
]

studentsList.push(student);

for (let index = 0; index < studentsList.length; index++) {
    const element = studentsList[index];

    console.log(element)
}