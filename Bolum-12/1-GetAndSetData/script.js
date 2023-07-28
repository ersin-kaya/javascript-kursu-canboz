localStorage.setItem('name', 'Can');
localStorage.setItem('age', 29); //biz buraya number'da versek localstorage'da bu string olarak tutulur

let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name, age);

//update için yine setItem kullanıyoruz, girilen key'e ait bir değer varsa günceller yoksa oluşturur zaten

localStorage.setItem('name', 'Can Boz'); //bir yöntem bu
localStorage.age = 30; //diğer yöntem bu

name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);

//bunun handikapı nedir? login olduktan sonra size bir authentication kod geliyor, ancak o kod ile backend servislerine istek atabiliyorsunuz, onu tutuyorsunuz içeride, belli bir süre geçtikten sonra (örneğin 1 saat veya kullanıcı logout olduktan sonra) eğer o kodu localStorage ile kaydettiyseniz localStorage'dan silmeniz lazım, öbür türlü o kod sürekli burada olursa güvenlik açığı olur, yani bunu uygulamayı kullandığınız zaman kaydetmeniz uygulamayla işiniz bittiği zamanda silmeniz lazım.