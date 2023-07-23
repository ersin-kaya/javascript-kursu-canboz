const username = '111canboz'; //1. sanki inputtan almış gibi bir tane username tanımlayalım

//2. sonra gelip regex pattern'imizi yazalım
const pattern = /^[a-z]{6,10}$/;

//3. test etmenin 2 tane yöntemi var, birisi 
let sonuc = pattern.test(username); //4. regularexpression'a ait test methodu var onu kullanıyoruz
console.log(sonuc); //5. true veya false değer dönecektir

//6. (/[a-z]{6,10}/ için) rakam desteği olmamasına rağmen canboz1 için true dönüyor çünkü başlangıç ve bitiş kısıtı koymadık(içerisinde (o aralıkta string değer) olması yetiyor)

//7. /^[a-z]{6,10}$/   yazınca  başlangıç ve bitişinde hepsi küçük harf ve 6-10 karakter aralığında olmak zorunda

if (sonuc) {
    console.log("başarılı")
} else {
    console.log("başarısız");
}


//8. diğer yöntemimiz ise tam tersi, yani yukarıda pattern'in test metodunu kullanıp içerisine aldığımız inputu verdik. Şimdi ise önce inputu verip onun içerisinde pattern'i arayacağız
let result = username.search(pattern); //9. eğer yoksa -1, varsa 0 ve 0dan büyük değerler döner (aradığı kaçıncı indeksten başlıyorsa onu dönüyor)
console.log(result);  //10. '111canboz'  ve /[a-z]{6,10}/ için 3 dönüyor

//11. '111canboz' ve /^[a-z]{6,10}$/ için -1 dönüyor

//12. ihtiyaca göre 2 yöntemden birisini kullanabiliriz