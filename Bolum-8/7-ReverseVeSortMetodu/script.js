const names = ['can', 'cem', 'tolga', 'tuğba', 'taner'];
names.sort();
names.reverse();
console.log(names);


const points = [70, 75, 25, 3, 10, 80, 27];
points.sort(); //sıraladı fakat yanlış, 3'ü 4.eleman yaptı, ilk rakama göre sıralıyor, sayının bütününe bakmıyor
points.reverse(); //bunda da aynı şekilde hatalı
console.log(points);

//şu aşağıdakiler doğruu
points.sort((a, b) => b - a); //büyükten küçüğe kısaltılmış yazım
console.log(points);

points.sort((a, b) => a - b); //küçükten büyüğe kısaltılmış yazım
console.log(points);


const students = [
    { name: 'can', point: 40 },
    { name: 'cem', point: 60 },
    { name: 'tolga', point: 30 },
    { name: 'taner', point: 100 },
];

//sort'un definition'nını okuyarak number kıyaslaması yaptıralım
students.sort((a, b) => {
    if (a.point > b.point) {
        return -1; //dokunma
    } else if (a.point < b.point) {
        return 1; //yer değiştir
    } else {
        return 0; //hiçbir şey yapma
    }
}); //şimdi oldu, en yüksek puanlı en başta
console.log(students);

//birde bunun kısaltılmış halini yazalım
students.sort((a, b) => b.point - a.point); //hııııı :) pozitif, sıfır veya negatif dönecek sonuçta