const students = [
    { name: 'can', point: 40 },
    { name: 'cem', point: 60 },
    { name: 'tolga', point: 30 },
    { name: 'taner', point: 100 },
    { name: 'deniz', point: 45 },
    { name: 'berkan', point: 85 },
];

const filtered = students.filter(student => student.point < 50);
console.log(filtered);

const plusPoint = filtered.map(student => {
    return `${student.name} isimli öğrencinin yeni notu ${student.point + 15}`;
});
console.log(plusPoint);


//şimdi bu kodu temizleyelim!!!

const newNotes = students.filter(student => student.point < 50).map(student => `${student.name} isimli öğrencinin yeni notu: ${student.point + 15}`);
console.log(newNotes);