//1. normalde bir fonksiyonu bu şekilde...
// const getTodos = () => {

// }

//2. async fonksiyon için...
const getTodos = async () => {

    //4. async'i kullandığımız zaman, herhangi bir backend olsun bir api olsun işte normal lokal bir dosyanıza istek attığınız zaman yani fecth etme (çekme) işlemi yaptığınız zaman Await'i kullanmanız lazım..

    let response = await fetch('example/can.json') //5. await bizim bildiğimiz promise chain işini yapıyor, yani bu fetch işlemi olana kadar (can.json çekilene kadar), (burada tanımladığımız)response değişkenine atamasını yapmıyor. Ne zamanki fetch ile işi bitti (oradan bir promise döndü) örneğin 0.05 saniyede mi döndü, 0.05 saniye bekliyor ne zamanki promise döndü, tak promise'i bu response'a atıyoruz. 
    const data = await response.json(); //6. burada da başında await kullanmamız lazım, neden? çünkü bu da bir promise döndürüyor, ve bunu(response) çekerkende fonksiyonumuzun başında async kullandığımız için burada da await'i kullanmamız lazım
    console.log(data);

}
//3. !!yalnız async bir fonksiyor geriye her zaman promise döndürür!!!!
getTodos();
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