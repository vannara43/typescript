enum LanguagesKnown { English, Hindi, Tamil }

let student2 = {
    Name: "StudentName",
    Age: 30,
    Phone: 123213,
    Language: LanguagesKnown.Tamil
}

let studentsList2 = [
    { Name: "Jack", Age: 22, Phone: 12312, Language: LanguagesKnown.English },
    { Name: "Marry", Age: 20, Phone: 43322, Language: LanguagesKnown.Hindi }
]

studentsList2.push(student2);

for (let index = 0; index < studentsList.length; index++) {
    const element = studentsList[index];

    console.log(element)
}

