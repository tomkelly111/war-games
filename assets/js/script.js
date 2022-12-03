document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let weaponType = this.getAttribute("data-type");
            gameSelector(weaponType);
        });
    }
});
/**This function takes the users chosen weaponType and runs the appropriate game,
 * If random is chosen then a random number is generated and the appropriate game is selected.
 * 
 */
function gameSelector(weaponType) {
    if (weaponType === "0") {
        rockGame();
    } else if (weaponType === "1") {
        paperGame();
    } else if (weaponType === "2") {
        scissorsGame();
    } else if (weaponType === "3") {
        let randomWeapon = Math.floor(Math.random() * 3);
        let weaponType = randomWeapon.toString();
        gameSelector(weaponType);
    } let computerChoice = document.getElementById("computer-choice");
    computerChoice.innerHTML = `<i class="fa-regular fa-circle-question"></i>`;
}

function rockGame() {
    console.log("rockGame success")
}

function paperGame() {
    console.log("paperGame success")
}

function scissorsGame() {
    console.log("scissorsGame success")
}



function startGame() {

}

function runGame() {

}

function checkWinner(computerWeapon) {

}

function endGame() {

}

function increaseUserScore() {

}

function increaseComputerScore() {

}

function draw(){

}
