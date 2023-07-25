const points = [70, 75, 25, 35, 10, 80, 27];

const newPoints = points.map(point => point + 10);
console.log(newPoints);



const students = [
    { name: 'can', point: 40 },
    { name: 'cem', point: 60 },
    { name: 'tolga', point: 30 },
    { name: 'taner', point: 100 },
];

const newStudentsPoints = students.map(student => {
    if (student.point < 50) {
        student.point += 15;
    }
    return student;
});
console.log(newStudentsPoints);