let resultsMsgEle = document.getElementById('results-msg');
let matchMsgEle= document.getElementById('match-msg');
let noMatchMsgEle= document.getElementById('no-match-msg');
let numberToGuessEle = document.getElementById('number-to-guess');
let guessInputEle = document.getElementById('number-guessed');
let testButtonEle = document.getElementById('test-button');


testButtonEle.addEventListener('click', testMatch);

function testMatch(e) {
    matchMsgEle.style.display = 'none';
    noMatchMsgEle.style.display = 'none';
    resultsMsgEle.style.display = 'none';
    let numberGuessed = parseInt(guessInputEle.value);

    if (!isNaN(numberGuessed) &&numberGuessed >0 && numberGuessed<= 10){
        resultsMsgEle.style.display = 'block';
        let numberToGuess = Math.floor(Math.random() * 10 +1);
        if (numberGuessed == numberToGuess) {
            console.log("Matched!");
            matchMsgEle.style.display= 'inline';
        }else{
            noMatchMsgEle.style.display='inline';
            console.log("Not match");
        }
        console.log("Number guessed:", numberGuessed);
        console.log("Number to match:", numberToGuess);
        numberToGuessEle.innerText = numberToGuess;
    }
}



// testButtonEle.addEventListener('click', testMatch);
// function testMatch(e){
//     console.log("Clicked boii");
// }