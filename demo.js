
let userScore=0;
let compScore=0;

const userScoreEle=document.querySelector("#user-score");
const compScoreEle=document.querySelector("#comp-score");
const scoreBoard=document.querySelector(".score");

const result=document.querySelector(".result p");

const rockEle=document.querySelector('#rock');
const paperEle=document.querySelector('#paper');
const scissorEle=document.querySelector('#scissor');



function convertToWord(letter){
    if(letter=='r'){
        return "Rock";
    }
    if(letter=='p'){
        return "Paper";
    }
    return "Scissors";

}
function getComputerChoice(){
    const choices=['r','p','s'];
   const number= Math.floor(Math.random()*3);
   return choices[number];
}

function wins(userchoice,computerChoice){
    userScore++;
userScoreEle.innerHTML=userScore;
compScoreEle.innerHTML=compScore;
result.innerHTML=`${convertToWord(userchoice)}  beats  ${convertToWord(computerChoice)} . User Wins!`;
}

function lose(userChoice,compChoice){
    compScore++;
    userScoreEle.innerHTML=userScore;
    compScoreEle.innerHTML=compScore;
    result.innerHTML=`${convertToWord(userChoice)}  loses to  ${convertToWord(compChoice)} . User Loses!`;

}

function draw(userChoice,compChoice){
    
    result.innerHTML=`${convertToWord(userChoice)}  equals  ${convertToWord(compChoice)} . It's a draw!`;
}

function game(userchoice){
    const compChoice=getComputerChoice();
    switch(userchoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
       wins(userchoice,compChoice);
        break;

        case "sr":
        case "ps":
        case "rp":
            lose(userchoice,compChoice);
        break;


        case "rr":
       case "pp":
        case "ss":
         draw(userchoice,compChoice);
            break;

    }
 }


// function game(userchoice){
//     console.log(userchoice);
//  }

function main(){

    
    function rockButton(){
        game("r");
    }
    rockEle.addEventListener('click',rockButton);
    
    function paperButton(){
        game("p");

    }
    paperEle.addEventListener('click',paperButton);
    
    function scissorButton(){
        game("s");

    }
    scissorEle.addEventListener('click',scissorButton);
}

main();
