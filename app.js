const player1 = {
    display : document.querySelector('#playerOne'),
    score : 0,
    button : document.querySelector('#buttonOne')
};

const player2 = {
    display : document.querySelector('#playerTwo'),
    score : 0,
    button : document.querySelector('#buttonTwo') 
}

const btnR = document.querySelector('#buttonReset');
const score = document.querySelector('#score');
let isGameOver = false;
let targetScore = 3;

function gamePoint(player, opponent){
    if(!isGameOver){
        player.score++
        if(player.score === targetScore){
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('lose');
        }
    }
        player.display.innerText = player.score;
};

player1.button.addEventListener('click', function(){
    gamePoint(player1, player2)
});

player2.button.addEventListener('click', function(){
    gamePoint(player2, player1)
});

score.addEventListener('change',function(){
    targetScore = parseInt(this.value);
    reset();
})

btnR.addEventListener('click', reset);

function reset(){
    isGameOver = false;
    for(player of [player1,player2]){
        player.score = 0;
        player.display.innerText = player.score;
        player.display.classList.remove('winner', 'lose');
    }
};