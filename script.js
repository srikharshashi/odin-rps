var user_score = 0;
var comp_score = 0;
var round_n = 0;
const options = ["rock", "paper", "scissor"];
var game_start = false;
const c_scoretag = document.querySelector(".cscore");
const p_scoretag = document.querySelector(".pscore");

function getcompselection() {
    const random = Math.floor(Math.random() * options.length);
    return (options[random]);
}

function playRound(playerSelection) {
    const comp_selection = getcompselection();
    console.log(playerSelection, comp_selection);
    //USER \ COMPUTER
    if (playerSelection === "rock" && comp_selection === "paper") {
        user_score += 1;
    }
    else if (playerSelection === "rock" && comp_selection === "scissor") {
        comp_score += 1
    }
    else if (playerSelection == "paper" && comp_selection == "rock") {
        user_score += 1;
    }
    else if (playerSelection == "paper" && comp_selection == "scissor") {
        comp_score += 1;
    }
    else if (playerSelection == "scissor" && comp_selection == "rock") {
        comp_score += 1;
    }
    else if (playerSelection == "scissor" && comp_selection == "paper") { user_score += 1; }
    else {

    }

    update();

}

const rock = document.querySelector(".rock");
rock.addEventListener("click", (e) => {
    playRound(rock.classList.value);
    game_start = true;
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", (e) => {
    playRound(paper.classList.value);
    game_start = true;
});

const scissor = document.querySelector(".scissor");
scissor.addEventListener("click", (e) => {
    playRound(scissor.classList.value);
    game_start = true;
});
const gamestate = document.querySelector(".gamestate");
if (!game_start) {
    gamestate.textContent = "Game hasnt started";
}


function update() {
    const c_scoretag = document.querySelector(".cscore");
    const p_scoretag = document.querySelector(".uscore");
    const round = document.querySelector(".round");
    
    if (round_n != 5) {
        if (user_score == 5) {
            gamestate.textContent = "You have won";
        }
        else if (comp_score == 5) {
            gamestate.textContent = "Computer has won";
            user_score = 0;
            comp_score = 0;
        }
        else {
            gamestate.textContent = "Game is runinng";
        }
    }
    else {
        gamestate.textContent = "Game Over";
        if (user_score > comp_score)
            alert("User is winner");
        else if (user_score == comp_score)
            alert("Tie");
        else
            alert("computer won");

    }
    round_n++;
    // console.log(c_scoretag.textContent);
    round.textContent = round_n;
    c_scoretag.textContent = comp_score;
    p_scoretag.textContent = user_score;

}