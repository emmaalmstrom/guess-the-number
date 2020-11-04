
const secretNumber = randomInt()

function randomInt() {
    return Math.floor(Math.random() * 101)
}

function getGuess() {
    const stringValue = document.getElementById('user-input').value
    return parseInt(stringValue, 10)
}

document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const guess = getGuess()
        console.log(guess)
        
        if (guess < secretNumber) {
            setMessage('Too small!')
        }
        if (guess > secretNumber) {
            setMessage('Too big!')
        }
        if (guess === secretNumber) {
            setMessage('You are right!')
        }
    }
})

function setMessage(msg) {
    document.getElementById('message').innerText = msg
}
