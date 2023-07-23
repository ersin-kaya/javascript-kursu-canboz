const correctAnswers = ['E', 'E', 'E', 'E'];

const form = document.querySelector('.question-form');
const result = document.querySelector('.result');

form.addEventListener('submit', event => {
    event.preventDefault();

    let score = 0;
    const userAnswers = [
        form.question1.value,
        form.question2.value,
        form.question3.value,
        form.question4.value];

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 25;
        }
    });

    // console.log(score);
    result.classList.remove('d-none');
    const span = document.querySelector('span');
    // console.log(span);
    span.textContent = `%${score}`;

});

// setTimeout'un özelliği, içerisine yazmış olduğunuz kodlar 1 kez çalışır(belirtilen süre sonunda)
// setTimeout(() => {
//     console.log('can');
// }, 2000);

// setInterval ise kodu belirtilen süreye göre her seferinde çalıştırır
//ancak bunu durdurmanın yöntemi var. clearInterval diye bir metodumuz daha var ancak bunu kullanabilmemiz için setInterval'i bir değişkene atmamız gerekiyor.
// setInterval(() => {
//     console.log('can');
// }, 1000);

let i = 0;
const bastir = setInterval(() => {
    console.log('can');
    i++;
    if (i === 4) {
        clearInterval(bastir);
    }
}, 1000);