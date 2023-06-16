var scores, roundScore, activePlayer, dice; gamePlaying

init()




document.querySelector('.btn--roll').addEventListener('click', function(){
   
    var dice = Math.floor(Math.random() * 6) + 1;

    var diceDOM = document.querySelector('.dice') 
    diceDOM.style.display = 'block' ;
    diceDOM.src = 'dice-' + dice + '.png'
    if (dice !=1){
        //add score
        roundScore +=dice
        document.querySelector('#current--' + activePlayer).textContent =roundScore
    }
    else{
        //Next Player
        activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
        roundScore = 0
        document.getElementById('current--0').textContent = '0'
        document.getElementById('current--1').textContent = '0'

        document.querySelector('.player--0').classList.toggle('active')
        document.querySelector('.player--1').classList.toggle('active')

    }



});

document.querySelector('.btn--hold').addEventListener('click', function(){

    if(gamePlaying){
        //Add the current score to the global score
scores[activePlayer] += roundScore

///Update the UI(user interface)
document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer]
///Check if player won the game

if (scores[activePlayer] >= 20){
    document.querySelector('#name--' + activePlayer).textContent = 'Winner!'
    document.queryselector('.dice').style.display = 'none'
    document.querySelector('.player--' + activePlayer ).classList.add('player--winner')
    document.querySelector('.player--' + sctivePlayer ).classList.remove('player--active')
    gamePlaying = false
}
else{
    ////next player
nextPlayer()

}
    }



});

function nextPlayer(){
    activePlayer === 0? activePlayer =1 : activePlayer = 0;
    roundScore = 0

    document.getElementById('current--0').textContent = '0'
    document.getElementById('current--1').textContent = '0'
    document.querySelector('.dice').style.display = 'none'
    document.querySelector('.player--0').classList.toggle('active')
    document.querySelector('.player--1').classList.toggle('active')

}

document.querySelector('.btn--new').addEventListener('click',function(){
 init()

})

function init(){
    scores = [0,0]
    roundScore = 0
    activePlayer = 1;

    document.querySelector('#current--0').textContent = dice
    document.querySelector('.dice').style.display = 'none'
    document.getElementById('score--0').textContent = '0'
    document.getElementById('score--1').textContent = '0'
    document.getElementById('current--0').textContent = '0'
    document.getElementById('current--1').textContent = '0'
    document.getElementById('name--0').textContent = 'Player1' 
    document.getElementById('name--1').textContent = 'Player2'
    document.querySelector('.player--0').classList.remove('player--winner')
    document.querySelector('.player--1').classList.remove('player--winner')
    document.querySelector('.player--0').classList.remove('player--active')
    document.querySelector('.player--1').classList.remove('player--active')
    document.querySelector('.player--0').classList.add('player--active')

    


}
