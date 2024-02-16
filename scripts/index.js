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

function handleKeyBoardButtonPress(){
    console.log('button pressed')
}
// capture the keyboard button press
document.addEventListener('keyup', handleKeyBoardButtonPress)


function continueGame(){
    // step-1 : generate a rendom alphabet 
    const alphabet = getARendomAlphabet();
    console.log('Your random alphabet is', alphabet);

    // Show the random alphabet in the screen 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color  
    setBckGroundColorById(alphabet);

}


// way number 2 by using reuseble code 
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}