console.log(1);
console.log(2);

setTimeout(() => {
    console.log('Can Boz')
}, 2000); //ne yaptı, 2 saniye bunu beklemedi, alttan devam etti sonra burası çalıştı yani asenkron

console.log(3);
console.log(4);
console.log(5);