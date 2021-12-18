const PLAYS = ['rock', 'paper', 'scissors']

let playerScore = 0
let computerScore = 0

// select computer play randomly
function computerPlay() {
    let randomIndex = Math.floor(Math.random() * 3)
    return PLAYS[randomIndex]
}

// receives user input and turns into lowercase
function userPlay() {
    let userChoice = prompt('What is your play?')
    return userChoice.toLocaleLowerCase()
}

// rock > scissors
// rock < paper
// scissors > paper

// compares user and computer play
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'You have a tie!'
    }

    // Rock possibilities beyond a tie
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore = playerScore + 1
        return 'You win! Rock beats Scissors.'
    }

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore = computerScore + 1
        return 'You lose! Paper beats Rock.'
    }


    // Paper possibilities beyond a tie
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore = computerScore + 1
        return 'You lose! Scissors beat Paper'
    }

    if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore = playerScore + 1
        return 'You win! Paper beats Rock.'
    }

    // Scissors possibilities beyond a tie
    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore = computerScore + 1
        return 'You lose! Rock beats Scissors.'
    }

    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore = playerScore + 1
        return 'You win! Scissors beats Paper.'
    }
}

// this is the gameloop function
function game() {
    let playerSelection
    let computerSelection

    for (let i = 0; i < 5; i = i + 1) {

        playerSelection = userPlay()
        computerSelection = computerPlay()

        console.log(playRound(playerSelection, computerSelection, playerScore, computerScore))
    }

    if (playerScore > computerScore) {
        console.log('You win the game! Congratulations, friend.')
    }

    if (playerScore < computerScore) {
        console.log('The computer beat you! Better luck next time.')
    }

    if (playerScore == computerScore) {
        console.log('Game ended in a tie!')
    }
}

game()

// variable scopes are weird in javascript. compare it to C.
// turn the game into an infinite loop, asking if the player wants to continue each time.
// if player wants to end the game, show the results.
// javascript is kinda neat