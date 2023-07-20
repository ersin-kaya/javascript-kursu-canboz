let adSoyad = "İbrahim Can Boz";

let son = adSoyad.lastIndexOf('a');
console.log(son)

let bastanSona = adSoyad.slice(0, 7)
console.log(bastanSona)

let bastanSonaSubstr = adSoyad.substr(8, 3)
console.log(bastanSonaSubstr)

let yerDegistir = adSoyad.replace('n', 'w')
console.log(yerDegistir)