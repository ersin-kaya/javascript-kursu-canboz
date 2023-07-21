const baslik = document.querySelector('h1');
console.log(baslik);
// baslik.setAttribute('style', 'padding:50px;'); //setAttribute önceli style değerini ezdiiii...

console.log(baslik.style);

baslik.style.padding = '50px';
baslik.style.fontSize = '60px';
baslik.style.fontWeight = 'bold';

console.log(baslik);
