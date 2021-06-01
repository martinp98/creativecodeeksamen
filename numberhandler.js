document.getElementById('guessvalue').setAttribute('value', randomGen());

function randomGen()
{
    return Math.floor((Math.random() * 1500) + 100)
}

document.getElementById("guessbutton").onclick = function ()
{
    let playerGuess = document.getElementById("guessvalue").value;
    let actualGuess = document.getElementById("guess").value;

    let guessScore = Math.abs(playerGuess - actualGuess)

    document.getElementById('score').setAttribute('value', guessScore);
};