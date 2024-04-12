let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gemCompChoice = () =>{
    const options = ["rocks","paper","srcissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame = () => {
   
    msg.innerText = "game was drawn.play again";
}

const showWinner = (userWin,userChoice,CompChoice)=> {
    if (userWin) { 
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = "you win! your ${userChoice} beats ${compChoice}";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
       
        msg.innerText = "you lose. your ${compChoice} beats ${userChoice}";
    }
};


const playGame = (userChoice) => {
    
    const CompChoice= gemCompChoice();
   
    //fight
    if (userChoice=== CompChoice){
        //draw game
        drawGame();
    } else if (userChoice=== "paper" ){
        userWin = CompChoice ==="scissors" ? false: true;
    } else if (userChoice ==="rock"){
        userWin = CompChoice === "paper"? false: true;
    } else {
       userWin= CompChoice === "rock"? false: true;
    }
    showWinner(userWin);

};

choices.forEach((choice) => {
   
    choice.addEventListener("click",() => {
        const userChoice= choice.getAttribute("id");
       
        playGame(userChoice);
    });
});