console.log('Merhaba')

let email = "ersin@ersin.com"
console.log(email)

//Birleştirme

let ad = "Can"
let soyad = "Boz"
let adSoyad = ad + " " + soyad

console.log(adSoyad)


//Karakterleri Çekme

console.log(adSoyad[2])


//Kaç Karakter

console.log(adSoyad.length)
if (adSoyad.length > 0) { }


//Metodlar

console.log(adSoyad.toUpperCase())
console.log(adSoyad.toLocaleLowerCase())
console.log(adSoyad)

let index = adSoyad.indexOf('B')
console.log("B'nin bulundugu index:" + index)
