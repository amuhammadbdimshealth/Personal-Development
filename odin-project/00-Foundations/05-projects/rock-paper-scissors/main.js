let playerScore = 0;
let opponentScore = 0;
let gameWinner = '' 

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    let index = Math.round(Math.random() * 2);    
    return choices[index];
}
function playRound(playerSelection, computerSelection) {
    const userSelection = playerSelection.toLowerCase(); 
    
    const divRoundResult = document.querySelector('.roundResult');
    const divPlayerScore = document.querySelector('.playerScore');
    const divComputerScore = document.querySelector('.computerScore');
    const divGameResult = document.querySelector('.gameResult');   

    // RESET
    if (playerScore == 5 || opponentScore == 5) {
        playerScore = 0;
        opponentScore = 0;
        divGameResult.textContent = '';
    }
    
    
    let resultStr = ''
    let roundWinner = 'tie'
    switch (userSelection) {        
        case 'rock':
            switch (computerSelection) {                
                case 'paper':
                    resultStr = 'You Loose! Paper beats Rock';
                    roundWinner = 'computer';
                break;
                case 'scissor':
                    resultStr = 'You Win! Rock beats scissor';
                    roundWinner = 'player';
                    break;
                default:
                    resultStr = 'Tie'
            }            
            break;
            
            case 'paper':
                switch (computerSelection) {                
                    case 'scissor':
                        resultStr = 'You Loose! scissor beats Paper';
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
            case 'scissor':
            switch (computerSelection) {                
                case 'rock':
                    resultStr = 'You Loose! Rock beats scissor';
                    roundWinner = 'computer';
                    break;
                case 'paper':
                    resultStr = 'You Win! scissor beats Paper';
                    roundWinner = 'player';
                    break;
                default:
                    resultStr = 'Tie'
            }
            break
        default:
            resultStr = 'Choose Rock, Paper or scissor!'            
    }
    console.log(
        { resultStr, roundWinner }
    ) 

    
    if (roundWinner === 'player') {
        playerScore++;
    } else if (roundWinner === 'computer') {
        opponentScore++;
    }

    if (playerScore == 5 || opponentScore == 5) {
        const playerWon = playerScore > opponentScore;
        divGameResult.textContent = `${playerWon ? 'Player': 'Computer'} Won! Game OVER!!`;                
    }
    
    divRoundResult.textContent = `This Round: ${resultStr}`;
    divPlayerScore.textContent = `Player Score: ${playerScore}`
    divComputerScore.textContent = `Computer Score: ${opponentScore}`    

}

const btnRock = document.getElementById('btn-rock')
const btnPaper = document.getElementById('btn-paper')
const btnScissor = document.getElementById('btn-scissor')

btnRock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('rock', computerSelection)
})
btnPaper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('paper', computerSelection)
})
btnScissor.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('scissor', computerSelection)
})
