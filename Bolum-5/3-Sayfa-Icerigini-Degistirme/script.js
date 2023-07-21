const ilkPDegeri = document.querySelector('p');
console.log(ilkPDegeri.innerText);

ilkPDegeri.innerText = 'Can Boz Full Stack Developer';

const pDegerleri = document.querySelectorAll('p');
pDegerleri.forEach(pDegeri => {
    console.log(pDegeri.innerText);
    pDegeri.innerText += ' yeni alan';
})

const icerik = document.querySelector('.icerik');
console.log(icerik.innerHTML);

icerik.innerHTML += '<h2>Vue JS, React JS, Angular JS</h2>';

console.log(icerik.innerHTML);

const ogrenciler = ['can', 'tolga', 'cem'];
ogrenciler.forEach(ogrenci => {
    icerik.innerHTML += `<p>${ogrenci}</p>`;
});

console.log(icerik.innerHTML);