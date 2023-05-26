// Buttons
const buttonOne = document.getElementById('btn-p1');
const buttonTwo = document.getElementById('btn-p2');
const buttonRestart = document.getElementById('btn-restart');

// Spans
const resultOne = document.getElementById('result-p1');
const resultTwo = document.getElementById('result-p2');
const round = document.getElementById('round-result');

let diceOne, diceTwo;
let winsOne = 0, winsTwo = 0, countRound = 0;


const handleButtonOne = () => {
    diceOne = Math.floor(Math.random() * 6) + 1;
    resultOne.innerHTML = diceOne;
    buttonOne.disabled = true;
    buttonTwo.disabled = false;
    
    saveData();
}

const handleButtonTwo = () => {
    diceTwo = Math.floor(Math.random() * 6) + 1;
    resultTwo.innerHTML = diceTwo;
    buttonTwo.disabled = true;
    buttonOne.disabled = false;

    roundWinner(diceOne, diceTwo);
    countRound += 1;
    checkNumberOfRounds();
    saveData();
}

const roundWinner = (a, b) => {
    if (a > b) {
        winsOne += 1;
        round.innerHTML = "Jogador 1 venceu a rodada!"
    } else if (a < b) {
        winsTwo += 1
        round.innerHTML = "Jogador 2 venceu a rodada!"
    } else {
        round.innerHTML = "Empate"
    }
}

const checkNumberOfRounds = () => {
    if (countRound === 10) {
        buttonOne.disabled = true;
        buttonTwo.disabled = true;   
        gameWinnerAlert(winsOne, winsTwo)
    }
}

const gameWinnerAlert = (a, b) => {
    let finalResult = '';
    if (a > b) {
        finalResult = `O jogador 1 venceu o jogo\n ${a} x ${b}`
    } else if (a < b) {
        finalResult = `O jogador 2 venceu o jogo\n ${b} x ${a}`
    } else {
        finalResult = "Os jogadores empataram"
    }
    setTimeout(() => alert(finalResult), 500)
}

const restartGame = () => {
    diceOne = 0, diceTwo = 0, winsOne = 0, winsTwo = 0, countRound = 0;
    resultOne.innerHTML = ''
    resultTwo.innerHTML = ''
    round.innerHTML = ''
    buttonOne.disabled = false;
    buttonTwo.disabled = false;   
    localStorage.diceOne = 0;
    localStorage.diceTwo = 0;
    localStorage.winsOne = 0;
    localStorage.winsTwo = 0;
    localStorage.countRound = 0;
}

const saveData = () => {
    localStorage.diceOne = diceOne;
    localStorage.diceTwo = diceTwo;
    localStorage.winsOne = winsOne;
    localStorage.winsTwo = winsTwo;
    localStorage.countRound = countRound;
}

const loadData = () => {
    diceOne = Number(localStorage.diceOne);
    diceTwo = Number(localStorage.diceTwo);
    winsOne = Number(localStorage.winsOne);
    winsTwo = Number(localStorage.winsTwo);
    countRound = Number(localStorage.countRound);
}


loadData();
buttonOne.onclick = handleButtonOne;
buttonTwo.onclick = handleButtonTwo;
buttonRestart.onclick = restartGame;