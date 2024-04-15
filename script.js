let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const drawGame=()=>{
    console.log("Game was Draw...");
    msg.textContent="Game was Draw! Play Again.";
    msg.style.backgroundColor="grey";
}

const showWinner=(userWin,userChoice,compChoice)=>{
   if(userWin){
    userScore++;
    userScorePara.textContent=userScore;
    console.log("You won");
    msg.textContent="You win!";
    msg.style.backgroundColor="green";
   }else{
    compScore++;
    compScorePara.textContent=compScore;
    console.log("You loose");
    msg.textContent="You lose!";
    msg.style.backgroundColor="red";
   }
}

const genCompChoice=()=>{
//rock paper scissor
const options=["rock","paper","scissors"];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
}

const playGame=(userChoice)=>{
    // console.log("Users choice" , userChoice)

    // /Generate computer choice
    const compChoice=genCompChoice();
    console.log("Computers choice =" , compChoice)

    if(userChoice === compChoice){
        // /Draw condition
        drawGame();
    }else {
        let userWin=true;
        if(userChoice==="rock"){
            // comp will choose scissor or paper
            userWin=compChoice ==="paper"? false : true ;
        }else if(userChoice==="paper"){
            // comp will choose rock or scissor
            userChoice=compChoice ==="scissors"?false:true;
        }else{
            //comp will choose  rock or paper
            userChoice=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute('id');
        console.log("UserChoice=",userChoice);
        playGame(userChoice);
    })
})