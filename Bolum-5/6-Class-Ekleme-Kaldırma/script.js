const icerik = document.querySelector('p');
console.log(icerik.classList);

icerik.classList.add('can');

icerik.classList.remove('error');


const pDegerleri = document.querySelectorAll('p');

pDegerleri.forEach(pDegeri => {
    if (pDegeri.textContent.includes('error')) {
        pDegeri.classList.add('error');
    } else if (pDegeri.textContent.includes('success')) {
        pDegeri.classList.add('success');
    }
});