const correctAnswers = ['8', '10', '3', '25'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');
const successMessage = document.querySelector('#successMessage');
const button = document.querySelector('.btn');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let score = 0;
    const userAnswers = [
        form.question1.value,
        form.question2.value,
        form.question3.value,
        form.question4.value
    ];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    result.classList.remove('d-none');

    let puan = 0;
    const bastir = setInterval(() => {

        document.querySelector('#percentage').textContent = `%${puan}`;
        console.log(document.querySelector('#percentage').textContent);

        if (puan === score) {
            clearInterval(bastir);

            if (score === 100) {
                successMessage.classList.remove('d-none');
                button.setAttribute('disabled', '');
            }

        } else {
            puan++;
        }
    }, 5);

});