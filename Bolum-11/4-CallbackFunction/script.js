const getTodos = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request, request.responseText);
            callback(undefined, request.responseText); //ilk parametre error, burada hata olmadığı için undefined
        } else if (request.readyState === 4) {
            // console.log("Başarılı cevap alamadık...")
            callback('Başarılı cevap alamadık...', undefined); //burada da data undefined
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.send();
};

console.log(1);
console.log(2);

getTodos((err, data) => {   //ASYNC olarak çalıştığı için(HttpRequest), konsola 1,2 yi basacak, sonra baktı beklenecek bir işlem var, 3,4,5 i basacak, sonra buranın işi bitince burayı basacak
    // console.log(err, data);
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);
console.log(5);