const now = new Date();
console.log(now);
console.log(typeof now);

console.log('year:', now.getFullYear());
console.log('month:', now.getMonth()); //index gibi o yüzden 1 eksik çıkıyor, +1 diyerek kullanabilirsin
//gün bilgiside aynı şekilde
console.log('date:', now.getDate()); // 31lik sisteme göre kaçıncı gündeyiz
console.log('day:', now.getDay()); //pazar:0, cumartesi:6
console.log('hour:', now.getHours());
console.log('minute:', now.getMinutes());
console.log('second:', now.getSeconds());


console.log('timestamp:', now.getTime()); //buradan çıkan değer: 1 ocak 1970 tarihiyle günümüzdeki değer arasında milisaniye cinsinden ne kadar zaman geçmiş onu ifade ediyor.
//bunu tarihleri kıyaslarken kullanabiliyoruz
console.log(typeof now.getTime());

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());