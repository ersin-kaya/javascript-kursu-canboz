const variable = [
    { hobby: 'swimming', person: 'Can' },
    { hobby: 'basketball', person: 'Can' },
    { hobby: 'take a trip', person: 'Can' },
]; //object olarak vs. set edemiyoruz

console.log(variable);

//array'imizi json stringe çevirip depolayabiliyoruz
localStorage.setItem('todos', JSON.stringify(variable));
console.log(JSON.stringify(variable)) //bu formatta bunu set edebiliriz localStorage'a


//json stringi çekip array olarak aldık, içeride kullanabiliriz
const storedData = localStorage.getItem('todos');
console.log(JSON.parse(storedData));