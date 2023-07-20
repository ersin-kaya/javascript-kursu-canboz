let isimler = ['can', 'ersin', 'serkan']
console.log(isimler[1]);

isimler[1] = 'ersin kaya'
console.log(isimler[1]);


let yaslar = [3, 15, 25, 50]
console.log(yaslar[3]);

let rastgele = ['can', 'boz', 10, 15];
console.log(rastgele)
console.log(rastgele.length)


let tireli = isimler.join('-');
console.log(tireli)

let virgullu = isimler.join(',');
console.log(virgullu)

let sira = isimler.indexOf('can')
console.log(sira);

let ekle = isimler.concat(['cenk', 'suna'])
console.log(ekle)
console.log(isimler)

let elemanEkle = isimler.push('arda')
console.log(isimler)

isimler.pop()
console.log(isimler)