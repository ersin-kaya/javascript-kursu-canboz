const sectigimUl = document.querySelector('.main'); //class'ı main olanı seçmiş olduk

let ogrenciler = ['can', 'tolga', 'cem'];

let html = ``;

ogrenciler.forEach(ogrenci => {
    html += `<li>${ogrenci}</li>`;
})

console.log(html)

sectigimUl.innerHTML = html;