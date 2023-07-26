const points = [70, 75, 25, 35, 10, 80, 27];
const myIndex = points.findIndex(point => point == 35);
points[myIndex] = 45;
console.log(points);


const students = [
    { name: 'can', point: 40 },
    { name: 'cem', point: 60 },
    { name: 'tolga', point: 30 },
    { name: 'taner', point: 100 },
];

const myIndex2 = students.findIndex(student => student.name == 'taner');
students[myIndex2].name = 'ersin';
console.log(students);

const tolgaIndex = students.findIndex(student => student.name == 'tolga');
students[tolgaIndex].point = 50;
console.log(students);

