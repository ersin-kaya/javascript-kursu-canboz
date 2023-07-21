const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute("href", "https://www.havensis.com.tr");
link.textContent = "Havensis";

const pDegeri = document.querySelector('p');
console.log(pDegeri.getAttribute('class'));
pDegeri.setAttribute("class", "yeniClassName");

console.log(pDegeri);

pDegeri.setAttribute("style", "color:red;")