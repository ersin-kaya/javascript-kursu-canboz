const points = [70, 75, 25, 35, 10, 80, 27];


const result = points.reduce((value, point) => {

    if (point > 50) {
        value++;
    }
    return value; //dizinin tamamını dönmeden return etmiyor galiba? araştır

}, 0); //buraya koyduğumuz 0 değeri, callbackfn'da bu metot(reduce) için verdiğimiz value parametresine atanıyor(böyle atıyoruz). reduce üzerine gelip incelersen ilk parametrenin previousValue olduğunu göreceksin
console.log(result);


// yeteneksiz backend'ci varsa kullanırız... örnek
//örneğin burada backend'ci öğrencilerin aldığı 2 notu, name'e göre groupby yapıp size göndermiyorsa....
const students = [
    { name: 'can', point: 40 },
    { name: 'cem', point: 60 },
    { name: 'tolga', point: 30 },
    { name: 'taner', point: 100 },
    { name: 'can', point: 80 },
    { name: 'cem', point: 30 },
    { name: 'tolga', point: 60 },
    { name: 'taner', point: 40 },
];

//bizde can'ın aldığı notların toplamını bastırmak istiyoruz
const canTotal2 = students.reduce((value, student) => {
    if (student.name === 'can') {
        value += student.point;
    }
    return value;
}, 0);
console.log(canTotal2);