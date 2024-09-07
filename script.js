let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
  const options = ["Rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
  //rock,paper,secissor
};

const drawgame = () => {
  msg.innerText = "Game was Draw. play again!";
  msg.style.backgroundColor = "burlywood";
};
const div = document.createElement("div");
const showWinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
    div.innerHTML = `<div class="firework"></div>`;
    msg.style.backgroundColor = "green";
    document.body.appendChild(div);
    setTimeout(() => {
      document.body.removeChild(div);
    }, 2000);
  } else {
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = `You Lose! ${compchoice} beats Your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  // generate computer choice
  const compchoice = gencompchoice();

  if (userchoice === compchoice) {
    //draw game
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "Rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissor" ? false : true;
    } else {
      userwin = compchoice === "Rock" ? false : true;
    }
    showWinner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
