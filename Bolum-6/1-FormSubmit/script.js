const form = document.querySelector('.signupForm');

//2. formdaki girilen değeri iki şekilde basabiliriz, birisi queryselector ile inputun idsini kullanarak çekebiliriz
const username = document.querySelector('#username');




form.addEventListener('submit', event => {
    event.preventDefault(); //1. submit olduğunda sayfanın yenilenmesini bu komut ile önlemiş oluyoruz
    // console.log('Form gönderildi.');

    // console.log(username.value);

    //ikinci yöntemler erişmek için
    console.log(form.username.value);
});


//3. ikinci yöntem ise buna formdan ulaşmaktır
//formdan ulaşmak için bu inputa name="username" ekledik