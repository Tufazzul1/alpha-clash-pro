function hideElementById(elementId){
    const element =  document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('hidden')
}

function setBckGroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}
function removeBckGroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');

}

function getARendomAlphabet(){
    // get or creat an alphabet array 
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split("");

    //     // get a rendom index 0-25 
    const rendomNumber = Math.random() * 25;
    const index = Math.round(rendomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}


