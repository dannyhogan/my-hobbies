const inputOne = document.getElementById('question1');
const inputTwo = document.getElementById('question2');
const inputThree = document.getElementById('question3');
const inputFour = document.getElementById('question4');
const inputFive = document.getElementById('question5');
const button = document.getElementById('submit-answers');

button.addEventListener('click', event => {
    event.preventDefault();
    const answerOne = inputOne.value;
    const answerTwo = inputTwo.value;
    const answerThree = inputThree.value;
    const answerFour = inputFour.value;
    const answerFive = inputFive.value;

    alert('You clicked me!');

});