const startDate = new Date('08/15/2018 9:45:00');
const now = new Date();
console.log(startDate);

const diff = now.getTime() - startDate.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
const years = Math.round(days / 365);
console.log(`Video çekmeye ${mins} dakika önce başladım`);
console.log(`Video çekmeye ${hours} saat önce başladım`);
console.log(`Video çekmeye ${days} gün önce başladım`);
console.log(`Video çekmeye ${years} yıl önce başladım`);


//timestamp to date
const timestamp = now.getTime();
console.log(new Date(timestamp));
