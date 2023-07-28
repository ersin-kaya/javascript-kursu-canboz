const getTodos = (resource) => { //artık geriye callback döndürmeyecek

    //şimdi örneğimizi promise kullanarak gerçekleştirelim
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
                // callback(undefined, data);
            } else if (request.readyState === 4) {
                reject("Başarılı cevap alamadık...");
                // callback('Başarılı cevap alamadık...', undefined);
            }
        });

        request.open('GET', resource);
        request.send();
    });


};

getTodos('example/can.json').then(data => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

// const getIt = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Başarılı Data");
//         reject("Başarısız İstek");
//     });
// };

// getIt().then(
//     data => {
//         console.log("Başarılı", data);
//     }, err => {
//         console.log("Başarısız", err);
//     });

// getIt().then(   //hata için catch'i kullanıyoruz
//     data => {
//         console.log("Başarılı", data);
//     }).catch(err => {
//         console.log("Başarısız", err);
//     });