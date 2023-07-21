// const secim = document.querySelector('p'); //ilk p yi seciyor
// console.log(secim);

// const hata = document.querySelector('.error'); //class'ı error olanlardan ilkini seciyor
// console.log(hata);

// const hata = document.querySelector('div.error'); //div'lerden class'ı error olanı secti !! yine ilkini seciyor
// console.log(hata);



//hepsini secmek için
const secimler = document.querySelectorAll('div.error');
console.log(secimler);

secimler.forEach(secim => {
    console.log(secim);
});
