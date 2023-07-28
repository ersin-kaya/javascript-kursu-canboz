localStorage.setItem('name', 'Can');
localStorage.setItem('age', 29);

let ad = localStorage.getItem('name');
let yas = localStorage.getItem('age');

console.log(ad, yas);

//2 farklı yaklaşım var, herhangi bir key için silmek isterim veya hepsini birden silmek isterim


// localStorage.removeItem('name'); //tek birini kaldırır
// ad = localStorage.getItem('name');
// console.log(ad);


//birde daha gerçekçi uygulamalarda, örneğin login oldunuz, kullanıcının rolüne göre tüm menüler değişiyor, atıyorum admin rolündeki adam şu şu menüleri görecek falan ... hızlı bir çözüm bulmanız lazım, dolayısıyla hızlı çözümde localStorage'ı kullanacaksınız, bu adam çıktığında gördüğü tüm menüleri, authentication, kod, menü olsun atıyorum adamın ismi vs. içeride 10-15 tane property var, tek tek removeItem ile uğraşmıyoruz. aşağıdaki gibi yaparız
localStorage.clear();

ad = localStorage.getItem('name');
yas = localStorage.getItem('age');

console.log(ad, yas);
