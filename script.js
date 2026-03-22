const choices=document.querySelectorAll(".choice");
let userscore=document.querySelector(".user-score");
let comscore=document.querySelector(".com-score");
let msg=document.querySelector(".msg");
let msgs=document.querySelector(".msgs");

let userScore=0;
let comScore=0;

 const genComputerChoice=()=>{
//option rock paper scissors
 const option=["rock","paper","scissors"];
 //genrate random numberbetwenn 0-3:0,1,2
 let randomnum=Math.floor(Math.random()*3);//index :0,1,2
  return option[randomnum]; //index :0,1,2
 }

 /*  Basic Rules
- Rock beats Scissors (Rock crushes Scissors).
- Scissors beats Paper (Scissors cut Paper).
- Paper beats Rock (Paper covers Rock).
- If both players choose the same option, it’s a draw.
*/

const playgame=(userChoice)=>{
    console.log("choice was clicked id is ",userChoice);
    //genrate computer choice
    let comChoice=genComputerChoice();
    console.log(comChoice);
   //game rule define 
   //condition for user win
if(userChoice==="rock"&& comChoice==="scissors") {
    userScore++;
    userscore.innerText=userScore;
    comscore.innerText=comScore;
       msg.innerText="You win. "+userChoice+" beats "+comChoice;
       msgs.style.backgroundColor="#4391da"
    
}
else if(userChoice==="scissors"&& comChoice==="paper") {
    userScore++;
    userscore.innerText=userScore;
    comscore.innerText=comScore;
       msg.innerText="You win. "+userChoice+" beats "+comChoice;
        msgs.style.backgroundColor="#4391da"
}
else if(userChoice==="paper"&& comChoice==="rock") {
    userScore++;
    userscore.innerText=userScore;
    comscore.innerText=comScore;
    msg.innerText="You win. "+userChoice+" beats "+comChoice;
     msgs.style.backgroundColor="#4391da"
}
//condition for computer win
 else if(userChoice==="scissors"&& comChoice==="rock") {
    comScore++;
    userscore.innerText=userScore;
    comscore.innerText=comScore;
 msg.innerText="you lost. "+comChoice+" beats "+userChoice;
 msgs.style.backgroundColor="#e75498"
}
else if(userChoice==="paper"&& comChoice==="scissors") {
    comScoreScore++;
    userscore.innerText=userScore;
    comscore.innerText=comScore;
    msg.innerText="you lost. "+comChoice+" beats "+userChoice;
    msgs.style.backgroundColor="#e75498"
}
else if(userChoice==="rock"&& comChoice==="paper") {
    comScore++;
    userscore.innerText=userScore;
    comscore.innerText=comScore;
    msg.innerText="you lost. "+comChoice+" beats "+userChoice;
    msgs.style.backgroundColor="#e75498"
}
//condition for draw 
 else if(userChoice===comChoice) {

    userscore.innerText=userScore;
    comscore.innerText=comScore;
    msg.innerText=" it was Draw "
    msgs.style.backgroundColor="#c05ce8"
}

}



//event lisner for choice selection
choices.forEach((choice)=>{
 
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       playgame(userChoice);
    })
})
