const baslik = document.getElementById('can');
console.log(baslik);

const hatalar = document.getElementsByClassName('error');
console.log(hatalar);

// // foreach bunun için çalışmıyor, alıp diziye cevirmen lazım, çünkü bu htmlcollection
// hatalar.forEach(hata => {
//     console.log()
// })

const pEtiketleri = document.getElementsByTagName('p');
console.log(pEtiketleri);
//yine htmlcollection olduğu için yine foreach ile dönemeyiz

//ancak bunlarda [0] diyerek elemanlara erişebiliyoruz.
console.log(hatalar[0]);
console.log(pEtiketleri[0]);