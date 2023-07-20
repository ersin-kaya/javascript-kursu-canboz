// const a = (callBacka) => {
//     let yas = 40;
//     callBacka(yas);
// };

// a(function (value) {
//     console.log(value);
// })

// const dene = (fonksiyonOlsun) => {
//     let plaka = 16;
//     fonksiyonOlsun(plaka)
// }
// dene(function (value) {
//     console.log(value)
// })


let ogrenciler = ['can', 'tolga', 'cem']

// ogrenciler.forEach(function () {
//     console.log("Hello")
// })

// ogrenciler.forEach(function (ogrenci, index) {
//     console.log(ogrenci, index)
// })

// ogrenciler.forEach(function (index, ogrenci) {
//     console.log(index, ogrenci)
//     console.log(ogrenci, index)
// })

//birde bunu function expression şeklinde tanımlayıp foreachin icinde o şekilde çağırabiliriz
const ogrenci = (kisi, index) => {
    console.log(`${index} - ${kisi}`);
}

ogrenciler.forEach(ogrenci)

