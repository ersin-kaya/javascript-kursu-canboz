const button = document.querySelector('button');
const mainPopup = document.querySelector('.main-popup');
const popupClose = document.querySelector('.popup-close');

button.addEventListener('click', () => {
    mainPopup.style.display = 'block';
});

popupClose.addEventListener('click', () => {
    mainPopup.style.display = 'none';
});

//popup dışında herhangi bir yere tıklanınca da kapansın
mainPopup.addEventListener('click', event => {
    console.log(event.target);
    if (event.target.className === 'main-popup') {
        mainPopup.style.display = 'none';
    }
});