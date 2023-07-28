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
    //5. veriler geldi fakat bu yöntem kullanım olarak hoş değil, ilkinin bitmesini bekleyecek çünkü artık data buraya(hemen üstteki console.log(data); satırı) gelecek, neden bekleyecek? datanın ulaşması için readyState===4'e girmesi ve status 200 cevabını almış olması lazım, yani ilk istek bitecek sonra alttaki getTodos() çalışacak, ikinci istekte bitecek daha sonra hemen altındaki çalışacak, işte Promise kullanımıyla biz bu problemi aşabiliyoruz...
    getTodos('example/cem.json', (err, data) => { //4. diğer json dosyalarına da ulaşmak istiyoruz o yüzden şu an bunu yapalım diyoruz
        console.log(data);
    });

    getTodos('example/tolga.json', (err, data) => {
        console.log(data);
    });
});