const form = document.querySelector('.signupForm');
const messageDiv = document.querySelector('.message');

form.addEventListener('submit', event => {
    event.preventDefault();
    const username = form.username.value;
    const usernamePattern = /^[a-z]{6,10}$/;

    if (usernamePattern.test(username)) {
        messageDiv.textContent = 'Başarılı';
    } else {
        messageDiv.textContent = 'Lütfen hepsini küçük harf ve 6 ile 10 karakter arasında giriniz.';
    }
});