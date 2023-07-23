const correctAnswers = ['E', 'E', 'E', 'E'];

const form = document.querySelector('.question-form');

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

    console.log(score);

});