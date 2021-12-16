const PLAYS = ['rock', 'paper', 'scissors']

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
        return 'You win! Rock beats Scissors.'
    }

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose! Paper beats Rock.'
    }


    // Paper possibilities beyond a tie
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose! Scissors beat Paper'
    }

    if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win! Paper beats Rock.'
    }

    // Scissors possibilities beyond a tie
    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose! Rock beats Scissors.'
    }

    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win! Scissors beats Paper.'
    }
}
