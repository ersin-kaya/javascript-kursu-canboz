// let yas = 29;

// console.log(yas == 29);
// console.log(yas == "29"); //tip js otomatik çevirdi ve true verdi

// console.log(yas === 29);
// console.log(yas === "29"); //strict

// console.log(yas != 29)
// console.log(yas != "29")

// console.log(yas !== 29)
// console.log(yas !== "29")

let yas = "29";
console.log(yas + 1);
console.log(typeof yas);

yas = Number(yas);
console.log(yas + 1)
console.log(typeof yas)

// let sonuc = Number('Can');
// console.log(sonuc);

// let sonuc = String(20);
// console.log(sonuc, typeof sonuc);

// let sonuc = Boolean(20); // 0 haric hep true döner
// console.log(sonuc, typeof sonuc);

let sonuc = Boolean('0'); //string olduğunda empty(boş) bir string olursa false alırım onun haricinde ne olursa olsun true döner
console.log(sonuc, typeof sonuc);

