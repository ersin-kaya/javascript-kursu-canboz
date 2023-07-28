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

    request.open('GET', resource);
    request.send();
};

// getTodos('example/can.json', (err, data) => {

//     console.log(data);
//     getTodos('example/cem.json', (err, data) => {
//         console.log(data);
//     });

//     getTodos('example/tolga.json', (err, data) => {
//         console.log(data);
//     });
// });

const getIt = () => {
    return new Promise((resolve, reject) => {
        resolve("Başarılı Data");
        reject("Başarısız İstek");
    });
};

// getIt().then(
//     data => {
//         console.log("Başarılı", data);
//     }, err => {
//         console.log("Başarısız", err);
//     });

getIt().then(   //hata için catch'i kullanıyoruz
    data => {
        console.log("Başarılı", data);
    }).catch(err => {
        console.log("Başarısız", err);
    });