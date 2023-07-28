//bir api'a istek attığımızda böyle
fetch('https://jsonplaceholder.typicode.com/todos/1') //1. fetch geriye promise dönüyor
    .then(response => response.json()) //2. response bizim resolve'umuz yani geriye doğru data döndüğünde dönen şey
    .then(json => console.log(json))

