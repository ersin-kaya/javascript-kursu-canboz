const getTodos = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data); //ilk parametre error, burada hata olmadığı için undefined
        } else if (request.readyState === 4) {
            callback('Başarılı cevap alamadık...', undefined); //burada da data undefined
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.send();
};

getTodos((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});