const test = QUnit.test;

test('return a score of 5 if all answers are correct', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const answerOne = 'Fortnite'
    const answerTwo = 10
    const answerThree = 'Mt Hood'
    const answerFour = 3
    const answerFive = 'Nintendo64'

    const expectedResult = 5
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkAnswers(answerOne, answerTwo, answerThree, answerFour, answerFive)
    //Assert
    assert.equal(expectedResult, result);
});

test('return a score of 0 if all answers are incorrect', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const answerOne = 'Donkey Kong'
    const answerTwo = 12
    const answerThree = 'Mt Bachelor'
    const answerFour = 3
    const answerFive = 'Wii'

    const expectedResult = 0
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkAnswers(answerOne, answerTwo, answerThree, answerFour, answerFive)
    //Assert
    assert.equal(expectedResult, result);
});