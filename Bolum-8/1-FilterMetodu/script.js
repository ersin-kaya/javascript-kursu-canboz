const points = [70, 75, 25, 35, 10, 80, 27];

const studentsPassed = points.filter(point => {
    return point > 50;
});
console.log(studentsPassed);

const students = [
    { name: 'can', passed: true },
    { name: 'cem', passed: false },
    { name: 'tolga', passed: false },
    { name: 'taner', passed: true }
];


const gecenOgrenciler = students.filter(student => {
    return student.passed;
});
console.log(gecenOgrenciler);

const kalanOgrenciler = students.filter(student => {
    return !student.passed;
});
console.log(kalanOgrenciler);

