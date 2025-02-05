let userScore=0;
let compScore=0;
const msg=document.querySelector("#msg");
const display=document.querySelector("#to-display");
const choices=document.querySelectorAll(".choice");
const comp=document.querySelector("#comp");

let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");
 
const playgame=(userChoice)=>{
    const compChoice=genCompChoice(); 
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if (userChoice==="rock"){
            userWin=(compChoice==="paper")?false:true;
        }
        else if(userChoice==="paper"){
            userWin=(compChoice==="scissors")?false:true;
        }
        else{
            userWin=(compChoice==="rock")?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    comp.innerText="Comp Choice was";
    display.src=`./images/${compChoice}.png`;
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const drawGame=()=>{
    msg.innerText="Game was a draw, Play Again"; 
    msg.style.backgroundColor="#081b31";
}

const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});