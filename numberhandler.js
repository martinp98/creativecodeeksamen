let guesses = 0;

document.getElementById("sendBtn").onclick = function ()
{
    let playerGuess = document.getElementById("guessvalue").value;
    let actualGuess = document.getElementById("guess").value;
    let guessScore = document.getElementById("score").value;
    let totalScore = document.getElementById("sumOfScore").value;

    guesses = guesses + 1;

    if(+playerGuess < +actualGuess)
    {
        totalScore = +totalScore + ((playerGuess / actualGuess) * 100);
    }else if (+playerGuess > +actualGuess)
    {
        totalScore = +totalScore + ((actualGuess / playerGuess) * 100);
    }else if (+playerGuess == +actualGuess)
    {
        totalScore = +totalScore + 100;
    }

    totalScore = totalScore.toFixed(2);

    console.log(totalScore)
    console.log(guessScore);

    document.getElementById('sumOfScore').setAttribute('value', totalScore);

    guessScore = (totalScore / guesses).toFixed(2);

    

    document.getElementById('score').setAttribute('value', guessScore);
    document.getElementById('gamesPlayed').setAttribute('value', guesses);

    document.getElementById('guessbutton').disabled = true; 

};
