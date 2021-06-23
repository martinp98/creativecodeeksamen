let name = prompt('Skriv dit navn her');
let guesses = 0;

const socket = io()

const chat = document.querySelector('.chat-form')
const Input = document.querySelector('.chat-input')

chat.addEventListener('submit', event => {
  event.preventDefault()
  socket.emit('chat', chatString())
  Input.value = ''
})

const chatWindow = document.querySelector('.chat-window')

const renderMessage = message => {
  const div = document.createElement('div4')
  div.classList.add('render-message')
  div.innerText = message
  chatWindow.appendChild(div)
}

socket.on('chat', message => {
    renderMessage(message)
})

function chatString()
{
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    let playerGuess = document.getElementById("guess").value;
    let actualGuess = document.getElementById("guessvalue").value;
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

    document.getElementById('sumOfScore').setAttribute('value', totalScore);

    guessScore = (totalScore / guesses).toFixed(2);

    document.getElementById('guessbutton').disabled = true;

    return  hour + ':' + minute + ':' + second + ' - ' + name + ' gættede på ' + playerGuess + ' og der var ' + actualGuess + ' ialt. Nu med en score på ' + guessScore + '% med ' + guesses + ' gæt! \n';
}