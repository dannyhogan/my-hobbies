function checkAnswers(answerOne, answerTwo, answerThree, answerFour, answerFive) {
    let score = 0;

    if(answerOne.toLowerCase() === 'fortnite') {
        score += 1;
    }

    if(answerTwo === 10) {
        score += 1;
    }

    if(answerThree.toLowerCase() === 'mt hood' || answerThree.toLowerCase() === 'hood' || answerThree.toLowerCase() === 'mt. hood') {
        score += 1;
    }

    if(answerFour === 3) {
        score += 1;
    }

    if(answerFive.toLowerCase() === 'nintendo64' || answerFive.toLowerCase() === 'nintendo 64') {
        score += 1;
    }

    return score;
}

export default checkAnswers;