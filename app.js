const counterDisplay = document.getElementsByTagName('p')
const winnerDisplay = document.querySelector('#winnerDisplay')
const buttons = document.querySelectorAll('button')

let counterPlayer = 0
let CounterComputer = 0


newGame()

function newGame(){
    defaultDisplay()
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            winnerDisplay.innerHTML = playRound(button.id, getComputerChoice())
            counterDisplay[0].innerHTML = `${counterPlayer}`
            counterDisplay[1].innerHTML = `${CounterComputer}`
            if(counterPlayer == 5 || CounterComputer == 5){
                setTimeout(() => {
                    alert('Game over! Press OK to restart')
                    counterPlayer = 0
                    CounterComputer = 0
                    defaultDisplay()
                },1000)
            }
        })
    })
}

function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissor']
    return choices[Math.floor(Math.random() * 3)]
}

function defaultDisplay(){
    counterDisplay[0].innerHTML = `${counterPlayer}`
    counterDisplay[1].innerHTML = `${CounterComputer}`
    winnerDisplay.innerHTML = 'Choose an option to start the game'
}

function playRound(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        return `It's a tie!`
    }
    else if(playerChoice == 'rock' && computerChoice == 'scissor'){
        counterPlayer += 1
        return `You win! ${playerChoice} beats ${computerChoice}`
    }
    else if(playerChoice == 'paper' && computerChoice == 'rock'){
        counterPlayer += 1
        return `You win! ${playerChoice} beats ${computerChoice}`
    }
    else if(playerChoice == 'scissor' && computerChoice == 'paper'){
        counterPlayer += 1
        return `You win! ${playerChoice} beats ${computerChoice}`
    }
    else{
        CounterComputer += 1
        return `You lose! ${computerChoice} beats ${playerChoice}`
    }
}