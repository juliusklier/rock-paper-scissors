   // console.dir(document)
   const playerCount = document.getElementById("player");
   const computerCount = document.getElementById("computer");
   const rock = document.getElementById("rock").addEventListener("click", buttonClick)
   const paper = document.getElementById("paper").addEventListener("click", buttonClick)
   const scissor = document.getElementById("scissor").addEventListener("click", buttonClick)
   function buttonClick(e) {
       console.log(e.target.id);
       game(e.target.id)
   }


   function computerPlay() {
   let random = Math.floor(Math.random() * 3);
   if (random == 0) {
       console.log("rock");
       return "rock";
   }
   else if (random == 1) {
       console.log("paper");
       return "paper";
   }
   else {
       console.log("scissor");
       return "scissor";
   }
}

function playRound(playerSelection, computerSelection) {


   if (playerSelection == "rock" && computerSelection == "paper") {
       return "You Lose! Paper beats Rock";
   }
   else if (playerSelection == "rock" && computerSelection == "rock") {
       return "It's a Draw";
                }
   else if (playerSelection == "rock" && computerSelection == "scissor") {
       return "You Won! Rock beats Scissor";
       
   }
   else if (playerSelection == "paper" && computerSelection == "paper") {
       return "It's a Draw";
                }
   else if (playerSelection == "paper" && computerSelection == "rock") {
       return "You Won! Paper beats Rock";
       
   }
   else if (playerSelection == "paper" && computerSelection == "scissor") {
       return "You Lose! Scissor beats Paper";
       
   }
   else if (playerSelection == "scissor" && computerSelection == "paper") {
       return "You Won! Scissor beats Paper";
       
   }
   else if (playerSelection == "scissor" && computerSelection == "rock") {
       return "You Lose! Rock beats Scissor";
       
   }
   else if (playerSelection == "scissor" && computerSelection == "scissor") {
       return "It's a Draw";
                }
}

function game(playerSelection) {
   let gameCount = document.querySelector("#gamecount");
   gameCount.textContent = "Time for a Duell!!!";
   let count_c = document.getElementById("computer").textContent;
   let count_p = document.getElementById("player").textContent;
       let computerSelection = computerPlay();
       playRound(playerSelection, computerSelection);
       if (playRound(playerSelection, computerSelection) == "You Lose! Rock beats Scissor"|| playRound(playerSelection, computerSelection) == "You Lose! Scissor beats Paper" || playRound(playerSelection, computerSelection) == "You Lose! Paper beats Rock") {
           let computerCounter = document.querySelector("#computer");
           computerCount.textContent = parseInt(count_c) + 1;
           checkWinner();
       }
       else if(playRound(playerSelection, computerSelection) == "You Win! Scissor beats Paper"|| playRound(playerSelection, computerSelection) == "You Won! Paper beats Rock" || playRound(playerSelection, computerSelection) == "You Won! Rock beats Scissor") {
           let playerCounter = document.querySelector("#player");
           playerCount.textContent = parseInt(count_p) + 1;
           checkWinner();
       }
   }


function checkWinner() {
   let playerCounter = document.querySelector("#player");
   let computerCounter = document.querySelector("#computer");
   let count_c = document.getElementById("computer").textContent;
   let count_p = document.getElementById("player").textContent;
   let gameCount = document.querySelector("#gamecount");
      if (parseInt(count_c) === 5) {
          gameCount.textContent = "You lost to the mighty Computer!";
          playerCounter.textContent = 0;
          computerCounter.textContent = 0;
           
   }
    else if (parseInt(count_p) === 5) {
           gameCount.textContent = "The insignificant Creatur won!?";
           playerCounter.textContent = 0;
          computerCounter.textContent = 0;
    }
   
}