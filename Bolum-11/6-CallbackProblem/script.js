const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('Başarılı cevap alamadık...', undefined);
        }
    });

    request.open('GET', resource); //1. istek attığımız yer artık bu adres değil:'https://jsonplaceholder.typicode.com/todos'
    request.send();
};

getTodos('example/can.json', (err, data) => { //2. o halde buradaki callbackfunction yapısıda değişmiş olacak. İlk parametre bizim dosyayı açacağımız yer olacak.

    console.log(data); //3.artık bir error'a gerek yok diyor...

});