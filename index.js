
const secretNumber = randomInt()
let guesses = new Array()

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
        guesses.push(getGuess())
        console.log(guess)
        console.log(guesses)
        console.log(guesses.length)

        if (guess < secretNumber) {
            setMessage('Too small!')
            document.getElementById('user-input').value = ''
        }
        if (guess > secretNumber) {
            setMessage('Too big!')
            document.getElementById('user-input').value = ''
        }
        if (guess === secretNumber) {
            setMessage(`You are right!, det tog dig bara ${guesses.length} gissningar`) 
        }
    }
})

function setMessage(msg) {
    document.getElementById('message').innerText = msg
}
