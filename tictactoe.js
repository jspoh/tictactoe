//140522 made this to learn minimax algorithms
const playerIconCode = '&#9675;';
let playerIcon = '○';
const aiIconCode =  '&#9587;';
const aiIcon = '╳';
let board = [];
let availablePositions = [];
const AllBtns = document.querySelectorAll('.box');
const body = document.querySelector('body');

setInterval(()=>{ //game loop?
    boardRefresh();

    if (CheckIfPlayerWon()) {body.style.backgroundColor = 'green';}
    if (CheckIfPlayerLost()) {body.style.backgroundColor = 'red';}

    //good stuff
    findAvailablePositions(board);
}, 10)

const boardRefresh = ()=>{
    board = [];
    for (let i of document.querySelectorAll('.box')){board.push(i.innerText);}
}

for (let btn of AllBtns) {
    btn.addEventListener('click', (e)=>{
        if (e.srcElement.innerText === '') {
            addPlayerIcon(e.target.id);
        }
        //console.log(e.srcElement.innerText)
    })
}

const addPlayerIcon = (id)=>{
    const playerSelection = document.querySelector(`#${id}`);
    playerSelection.innerHTML = playerIconCode;
}

const CheckIfPlayerWon = ()=>{
    if (board[0] === playerIcon) {
        if (board[1] === playerIcon && board[2] === playerIcon) {return true;}
        if (board[3] === playerIcon && board[6] === playerIcon) {return true;}
        if (board[4] === playerIcon && board[8] === playerIcon) {return true;}
    }
    if (board[1] === playerIcon) {
        if (board[4] === playerIcon && board[7] === playerIcon) {return true;}
    }
    if (board[2] === playerIcon) {
        if (board[4] === playerIcon && board[6] === playerIcon) {return true;}
        if (board[5] === playerIcon && board[8] === playerIcon) {return true;}
    }
    if (board[3] === playerIcon) {
        if (board[4] === playerIcon && board[5] === playerIcon) {return true;}
    }
    if (board[4] === playerIcon) {}
    if (board[5] === playerIcon) {}
    if (board[6] === playerIcon) {
        if (board[7] === playerIcon && board[8] === playerIcon) {return true;}
    }
    if (board[7] === playerIcon) {}
    if (board[8] === playerIcon) {}

    return false;
}

const CheckIfPlayerLost = ()=>{
    if (board[0] === aiIcon) {
        if (board[1] === aiIcon && board[2] === aiIcon) {return true;}
        if (board[3] === aiIcon && board[6] === aiIcon) {return true;}
        if (board[4] === aiIcon && board[8] === aiIcon) {return true;}
    }
    if (board[1] === aiIcon) {
        if (board[4] === aiIcon && board[7] === aiIcon) {return true;}
    }
    if (board[2] === aiIcon) {
        if (board[4] === aiIcon && board[6] === aiIcon) {return true;}
        if (board[5] === aiIcon && board[8] === aiIcon) {return true;}
    }
    if (board[3] === aiIcon) {
        if (board[4] === aiIcon && board[5] === aiIcon) {return true;}
    }
    if (board[4] === aiIcon) {}
    if (board[5] === aiIcon) {}
    if (board[6] === aiIcon) {
        if (board[7] === aiIcon && board[8] === aiIcon) {return true;}
    }
    if (board[7] === aiIcon) {}
    if (board[8] === aiIcon) {}
    
    return false;
}

//stuff for minimax algorithm

function findAvailablePositions(currentBoard){
    availablePositions = [];
    for (let i=0; i<currentBoard.length; i++){
        if (currentBoard[i] === '') {availablePositions.push(i)}
    }
}

/*
function minimax(position, depth, isMaximizingPlayerTurn) { //depth is how far down the tree we want to search
    //if depth is 0 or gameover {return static eval of pos}

    if (isMaximizingPlayerTurn) {
        let maxEval = -Infinity;
        for (let i of position) {
            let evalA = minimax(i, depth-1, false); //recursion to check each pos
            maxEval = max(maxEval, evalA); //basically if eval>maxEval, maxEval = eval
        }
        return maxEval;
    }
    else if (!isMaximizingPlayerTurn) {
        let minEval = +Infinity;
        for (let i of position) {
            let evalI = minimax(i, depth-1, true);
            minEval = min(minEval, evalI);
        }
        return minEval;
    }
}*/
//minimax(currentPosition, 3, true);


































let maxEval = -Infinity;
let bestMove;

function minimax(newBoard, isMaximizingPlayerTurn) {
    if (isMaximizingPlayerTurn) {
        for (let posIndex of availablePositions) {
            newBoard[posIndex] = aiIcon; //if AI selects this
            if (CheckIfPlayerLost()) { //check if AI will win
                bestMove = posIndex;
                return 1;
            } 
            else if (CheckIfPlayerWon()) { //if not, check if AI will lose
                return -1;
            } 
            newBoard[posIndex] = '';
            minimax(newBoard, isMaximizingPlayerTurn);
        }
    }
}






