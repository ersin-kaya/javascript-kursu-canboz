const form = document.querySelector('.signupForm');
const messageDiv = document.querySelector('.message');

const usernamePattern = /^[a-z]{6,10}$/;

form.addEventListener('submit', event => {
    event.preventDefault();
    const username = form.username.value;

    if (usernamePattern.test(username)) {
        messageDiv.textContent = 'Başarılı';
    } else {
        messageDiv.textContent = 'Lütfen hepsini küçük harf ve 6 ile 10 karakter arasında giriniz.';
    }
});

// realtime validation
form.username.addEventListener('keyup', event => {
    // console.log(event.target.value, form.username.value); //buradaki 2 yöntem ile de değere ulaşabiliyoruz ancak biz event.target.value yu kullanalım çünkü yarın öbür gün inputun name değeri değişirse patlamasın diye ama o durumda başka yerler patlar zaten. Olsun event.target'ı kullanmak daha sağlıklı

    if (usernamePattern.test(event.target.value)) {
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
});