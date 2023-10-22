function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.round(Math.random() * 2);    
    return choices[index];
}
function playRound(playerSelection, computerSelection) {
    const userSelection = playerSelection.toLowerCase();
    let resultStr = ''
    let roundWinner = 'tie'
    switch (userSelection) {        
        case 'rock':
            switch (computerSelection) {                
                case 'paper':
                    resultStr = 'You Loose! Paper beats Rock';
                    roundWinner = 'computer';
                break;
                case 'scissors':
                    resultStr = 'You Win! Rock beats Scissors';
                    roundWinner = 'player';
                    break;
                default:
                    resultStr = 'Tie'
            }            
            break;
            
            case 'paper':
                switch (computerSelection) {                
                    case 'scissors':
                        resultStr = 'You Loose! Scissors beats Paper';
                        roundWinner = 'computer';
                        break;
                    case 'rock':
                        resultStr = 'You Win! Paper beats Rock';
                        roundWinner = 'player';
                        break;
                    default:
                        resultStr = 'Tie'
                }
                break;
            case 'scissors':
            switch (computerSelection) {                
                case 'rock':
                    resultStr = 'You Loose! Rock beats Scissors';
                    roundWinner = 'computer';
                    break;
                case 'paper':
                    resultStr = 'You Win! Scissors beats Paper';
                    roundWinner = 'player';
                    break;
                default:
                    resultStr = 'Tie'
            }
            break
        default:
            resultStr = 'Choose Rock, Paper or Scissors!'            
    }
    return { resultStr, roundWinner }

}

function game(totalRounds) {
    let playerScore = 0;
    let opponentScore = 0;
    let gameWinner = ''    

    for (let round = 0; round < totalRounds; round++) {    
        const playerSelection = prompt('Rock, paper or Scissors').toLowerCase();
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);
        if (result.roundWinner === 'player') {
            playerScore++;
        } else if (result.roundWinner === 'computer') {
            opponentScore++;
        }
        console.log(result);
    }    
    if (playerScore > opponentScore) {
        gameWinner = 'player'
        console.log(`${gameWinner} has won the game`); 
    }
    else if (opponentScore > playerScore) {
        gameWinner = 'computer'
        console.log(`${gameWinner} has won the game`); 
    }
    else {
        console.log('Game Tied');
    }

    
}

const result = game(5)