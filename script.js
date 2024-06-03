const inputfeild = document.querySelector("#guessField")
const submitBtn = document.querySelector("#subt")

const resultId = document.querySelector(".resultParas")
const guessList = document.querySelector(".guesses")

const res = document.querySelector(".lastResult")
const lowOrhi = document.querySelector(".lowOrHi")
const p = document.createElement('p');


let randomNumber = Math.floor((Math.random() * 100) + 1)


let prevGuss = [];
let numberGuss = 1;
let gamePlay = true;
if (gamePlay) {
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault()
        let guss = inputfeild.value;
        ValidateField(guss)
    })
}

function ValidateField(guss) {
    if (isNaN(guss)) {
        alert('PLease enter a valid number');
    }
    else if (guss < 1) {
        alert('PLease enter a valid number');

    }
    else if (guss > 100) {
        alert('PLease enter a valid number');
    }
    else {
        prevGuss.push(guss)
        if (numberGuss == 10) {
            displayGuss(guss)
            displayMassage(`game over the guss was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuss(guss)
            checkGuss(guss)
        }
    }

}

function checkGuss(guss) {
    if (guss == randomNumber) {
        displayMassage(`You won game guss right`)
        endGame()
    }
    else if (guss > randomNumber) {
        displayMassage(`Number is TOOO low`);
    } else if (guss > randomNumber) {
        displayMassage(`Number is TOOO High`);
    }

}

function displayGuss() {
    inputfeild.value = ''
    guessList.innerHTML = prevGuss
    res.innerHTML = `${10 - numberGuss}`
    ++numberGuss
    console.log(numberGuss)
}

function displayMassage(massage) {
    lowOrhi.innerHTML = `<h2>${massage}</h2>`;
}


function endGame() {
    inputfeild.value = ""
    inputfeild.setAttribute("disabled", "")
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    resultId.appendChild(p)
    gamePlay = false;
    newGame();

}

function newGame() {
    const newGameButton = document.querySelector("#newGame")
    randomNumber = Math.floor((Math.random() * 100) + 1)
    newGameButton.addEventListener('click', () => {
        inputfeild.removeAttribute("disabled")
        prevGuss = []
        guessList.innerHTML = ''
        res.innerHTML = 10
        numberGuss = 1
        gamePlay = true;
        resultId.removeChild(p)
        displayMassage("")
    })
}