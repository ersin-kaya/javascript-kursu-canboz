const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject("Başarılı cevap alamadık...");
            }
        });
        request.open('GET', resource);
        request.send();
    });
};

getTodos('example/can.json')
    .then(data => { //2. dolayısıyla ilkinde can.jsondan dönen dataya ulaşıyorum
        console.log("Promise 1", data); //4. karıştırmamak için başına ifade ekleyelim
        return getTodos('example/cem.json');
    }).then(data => { //1. burası(yukarısı) neyi ifade ediyor? cem.jsondan dönen new promise'i ifade ediyor //3. return dedikten sonra ikinci then'de artık cem.jsondan dönen json değerine ulaşıyorum
        console.log("Promise 2", data);
        return getTodos('example/tolga.json');
    }).then(data => {
        console.log("Promise 3", data);
    })
    .catch((err) => { //5. ilk nerede patlarsa catch'e girer, yani bu catch hepsi için çalışacaktır. Örneğin ilkinde patlarsa resolve değilde reject dönerse direkt burada catch'e girer, yani orada then(data) çalışmadı, doğrudan buraya catch'e...
        console.log(err);
    });