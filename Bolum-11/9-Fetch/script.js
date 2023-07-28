//bir api'a istek attığımızda böyle
// fetch('https://jsonplaceholder.typicode.com/todos/1') //1. fetch geriye promise dönüyor
//     .then(response => response.json()) //2. response bizim resolve'umuz yani geriye doğru data döndüğünde dönen şey
//     .then(json => console.log(json))



//kendi dosyamıza ulaşmak istediğimizde
//response => {...} yerine yukarıdaki gibi kısa da yazabiliriz çünkü tek satır...
fetch('example/can.json')
    .then(response => {
        return response.json(); //5. bunun promise döndürdüğünü, promise'den sonra tekrar then kullandığımızı
    }) //burası bize promise döndürdüğü için tekrar then dememiz lazım,  then dedikten sonra artık bize data geliyor
    .then(data => { //6. buradaki data'nın resolve'a denk geldiğini
        console.log(data);
    })
    .catch(err => { //7. buradaki error'ın reject'e denk geldiğini falan rahat anlayabiliyor olmanız lazım
        console.log(err);
    })

    //3. fetch kullanımı çok daha basit, az satırda kod ile gerçekleşiyor.
    //4. biz bu bölümde detayına kadar xmlhttprequest'i daha sonra promise'i daha da sonra promise chain'i gördük. Şimdi çok daha rahat anlayabiliyor olmanız lazım

    //8. direkt fetch i kullansaydık bunları atlamış, ezberlemiş olacaktınız.
    //9. eğer eski bir projeye denk gelirseniz, artık hem xmlhttprequest'i biliyorsunuz hemde yeni proje tarzlarında (örneğin react'te bir istek atmaya kalktığınızda herhangi bir 3thparty kütüphane kullanılmıyorsa) direkt fetch ile de isteğinizi atıp buradan datayı çekebilirsiniz