const getTodos = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request, request.responseText);
            callback();
        } else if (request.readyState === 4) {
            // console.log("Başarılı cevap alamadık...")
            callback();
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.send();
};

getTodos(() => {
    console.log("Can Boz");
});