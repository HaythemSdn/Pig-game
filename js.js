// variable's declaration 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
 //*******************************************************************************/

// function party 
function reset (val){
    val.textContent=0;
}
function addScore(player,score){
    player.textContent=Number(player.textContent)+score;
}
function togglePlayer(player1,player2,current){
reset(current);
player1.classList.toggle("player--active");
player2.classList.toggle("player--active");
}
function playerActived(player){
   return player.classList.contains("player--active");
}
// *************************************************************************************

reset(score0El);reset(score1El);

// Events party

btnRoll.addEventListener("click",function(){
    const diceNumber=Math.floor(Math.random()*(6-1+1)+1);
    diceEl.setAttribute("src",`./images/dice-${diceNumber}.png`);
    playerActived(player0El) ? addScore(current0El,diceNumber):addScore(current1El,diceNumber);
 if (diceNumber==1){ playerActived(player0El)  ?togglePlayer(player0El,player1El,current0El)
                                               :togglePlayer(player1El,player0El,current1El)}
})

btnHold.addEventListener("click",function(){
if (playerActived(player0El)){
    const current0=Number(current0El.textContent);
    addScore(score0El,current0);
    togglePlayer(player0El,player1El,current0El)
}
else{
    const current1=Number(current1El.textContent);
    addScore(score1El,current1);
    togglePlayer(player1El,player0El,current1El)
}
})

btnNew.addEventListener("click",function(){
reset(current0El);reset(current1El);reset(score0El);reset(score1El)
togglePlayer(player0El,player1El,current0El)
})
// The end of this freaking game niGGa 




