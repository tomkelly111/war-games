document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let weaponType = this.getAttribute("data-type");
            gameSelector(weaponType);
        });
    }
});

function gameSelector(weaponType) {

}

function rockGame() {

}

function paperGame() {

}

function scissorsGame() {

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
