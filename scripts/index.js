// function play(){
//step - 1 Hide the home screen 
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');
// console.log(homeSection.classList)


//step - 2  Show the play ground
// const playGroundSection = document.getElementById('play-ground');
// playGroundSection.classList.remove('hidden');
// console.log(playGroundSection.classList)

// }

function handleKeyBoardKeyUpevent(event) {
    const playerPressed = event.key
    // console.log("player pressed ", playerPressed);


    // stop the game if press 'ESC'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected press 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    // console.log('Current alphabet element', currentAlphabetElement.innerText);
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    // console.log(expectedAlphabet, playerPressed);


    // cheak matched or not
    if (playerPressed === expectedAlphabet) {
        // console.log('Correct Matched!');
        const currentScore = getTextElementValueById('current-score');
        const updateScore = currentScore + 1;
        setElementValueById('current-score', updateScore);


        // start a new round 
        removeBckGroundColorById(expectedAlphabet)
        continueGame()



        // ---------------------------------------------------------there is two way
        // // 1. Update score : 
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText)
        // console.log(currentScore);

        // // 2. increase the score by 1
        // const newScore = currentScore + 1;

        // // 3. Show the new text
        // currentScoreElement.innerText = newScore;
        // --------------------------------------------------------------
    }


    else {
        // console.log('You missed  it , Try again ! ');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setElementValueById('current-life', updatedLife);



        if (updatedLife === 0) {
            gameOver();
        }


        // -------------------------------------------------------------there is two way

        // // 1.  get the current life number 
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // console.log(currentLife);

        // // 2. reduce the life count
        // const newLife = currentLife - 1;
        // // 3. display the current life
        // currentLifeElement.innerText = newLife;
        // ---------------------------------------------------------------------
    }

}


document.addEventListener('keyup', handleKeyBoardKeyUpevent)

function continueGame() {
    // step-1 : generate a rendom alphabet 
    const alphabet = getARendomAlphabet();

    // Show the random alphabet in the screen 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color  
    setBckGroundColorById(alphabet);

}


// way number 2 by using reuseble code 
function play() {
    // hide everthing show only play ground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');


    // reset score and life 
    setElementValueById('current-life', 5);
    setElementValueById('current-score', 0);
    continueGame()
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    const lastScore =  getTextElementValueById('current-score');
    console.log(lastScore);
    setElementValueById('last-score', lastScore);


    // clear the last selected alphabet background color

    const currentAlphabet = getElementTextById('current-alphabet');
    console.log(currentAlphabet);
    removeBckGroundColorById(currentAlphabet)
}
