//1. normalde bir fonksiyonu bu şekilde...
// const getTodos = () => {

// }

//2. async fonksiyon için...
const getTodos = async () => {

    //4. async'i kullandığımız zaman, herhangi bir backend olsun bir api olsun işte normal lokal bir dosyanıza istek attığınız zaman yani fecth etme (çekme) işlemi yaptığınız zaman Await'i kullanmanız lazım..

    let response = await fetch('example/can.json') //5. await bizim bildiğimiz promise chain işini yapıyor, yani bu fetch işlemi olana kadar (can.json çekilene kadar), (burada tanımladığımız)response değişkenine atamasını yapmıyor. Ne zamanki fetch ile işi bitti (oradan bir promise döndü) örneğin 0.05 saniyede mi döndü, 0.05 saniye bekliyor ne zamanki promise döndü, tak promise'i bu response'a atıyoruz.
    if (response.status !== 200) {
        throw new Error("Doğru endpoint'e istek atmadınız");
    }
    const data = await response.json(); //6. burada da başında await kullanmamız lazım, neden? çünkü bu da bir promise döndürüyor, ve bunu(response) çekerkende fonksiyonumuzun başında async kullandığımız için burada da await'i kullanmamız lazım
    // console.log(data);
    //7. peki biz bunu çağırdıktan sonra çağırdığımız yerde kullanmak istersek nasıl yapacağız? bunu bir kere return etmemiz lazım, buradaki neyi promise'i neden? async bir promise döndürüyor!!!
    return data;

}
//3. !!yalnız async bir fonksiyor geriye her zaman promise döndürür!!!!
// getTodos(); //8. data return edildikten sonra benim burada promise'e ulaşmam için ne yapmam lazımdı? içerisindeki resolve ve reject'e ulaşmak için tekrar then kullanmam lazımdı 
getTodos().then((response) => {
    console.log(response); //9. bu response neye tekabül ediyor, resolve'a tekabül ediyordu yani başarılı dönen cevaba takabül ediyor
}).catch((err) => {
    console.log(err.message);
});
//10. buradaki problem şu: şimdi biz kaynak kısmına(url'e/dosya yoluna) yanlış bir şey yazdığımızda, burada resolve etmeye devam ediyor yani reject'e hataya düşmüyor, sanki başarılıymış gibi fetch döndürmeye devam ediyor. denedik response'a null çaktı, null'ı json'a çevirmeye çalışınca hata aldık yani resolve etmeye devam ediyor. bunu engellemenin yolu status kodu kullanmak. eğer 200 kodu dönüyorsaa...
// console.log(getTodos())



// fetch('example/can.json')
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });