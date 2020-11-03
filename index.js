
function randomInt() {
    return Math.floor(Math.random() * 101)
}


const secretNumber = randomInt()


function getGuess() {
    const stringValue = document.getElementById('user-input').value
    return parseInt(stringValue, 10)
}

document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const guess = getGuess()
        console.log(guess)
    }
})

function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

setMessage("bananpannkaka")
const x = setMessage("banan")

console.log(x)
