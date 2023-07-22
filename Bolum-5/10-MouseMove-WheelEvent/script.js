const kutu = document.querySelector('.kutu');

kutu.addEventListener('mousemove', event => {
    // console.log(event);
    // console.log(event.offsetX, event.offsetY);
    kutu.textContent = `X koordinatı ${event.offsetX}, Y koordinatı ${event.offsetY}`;
});

document.addEventListener('wheel', event => {
    console.log(event.pageX, event.pageY);
});