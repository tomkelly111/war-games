/*jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let weaponType = this.getAttribute("data-type");
            gameSelector(weaponType);
        });
    }
});
/**This function takes the users chosen weaponType and changes the image displayed to that weapon.
 * If random is chosen then a random number between 0-2 is generated and fed back into the function.
 *startGame() function is then ran*/
function gameSelector(weaponType) {
    if (weaponType === "0") {
        let rockElement = document.getElementById("user-choice");
        rockElement.outerHTML = `<span id="user-choice" data-type="0"><i class="fa-solid fa-hand-fist"></i></span>`;
        startGame();
    } else if (weaponType === "1") {
        let paperElement = document.getElementById("user-choice");
        paperElement.outerHTML = `<span id="user-choice" data-type="1"><i class="fa-solid fa-hand"></i></span>`;
        startGame();
    } else if (weaponType === "2") {
        let scissorsElement = document.getElementById("user-choice");
        scissorsElement.outerHTML = `<span id="user-choice" data-type="2"><i class="fa-solid fa-hand-scissors"></i></span>`;
        startGame();
    } else if (weaponType === "3") {
        let randomWeapon = Math.floor(Math.random() * 3);
        let weaponType = randomWeapon.toString();
        gameSelector(weaponType);
    } /**This part of the function resets the computer's displayed image back to neuteral and deletes 
    the winning or losing text.
    */let computerChoice = document.getElementById("computer-choice");
    computerChoice.innerHTML = `<i class="fa-regular fa-circle-question"></i>`;
    let playAgain = document.getElementById("play-again");
    playAgain.innerHTML = "";
}
/**This function changes the ID of the play button so it is now visible. An event listner is added to the button
 * so when clicked runGame() function is ran.
 */
function startGame() {
    let playButton = document.getElementById("play-button");
    playButton.setAttribute("id", "show-play-button");
    
    let letsBattle = document.getElementById("show-play-button");
    letsBattle.addEventListener("click", runGame);
}

/** This function generates a random number between 0-2 for the computer's chosen weapon.
 * The function then checks the computer's chohce and changes the image displayed. The
 * checkWinner() function is then ran.
 */
function runGame() {
    let computerChoice = document.getElementById("computer-choice");
    let computerWeapon = Math.floor(Math.random() * 3);
    if (computerWeapon === 0) {
        computerChoice.innerHTML = `<i class="fa-solid fa-hand-fist"></i>`;
        checkWinner(computerWeapon);
    } else if (computerWeapon === 1) {
        computerChoice.innerHTML = `<i class="fa-solid fa-hand"></i>`;
        checkWinner(computerWeapon);
    } else if (computerWeapon === 2) {
        computerChoice.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
        checkWinner(computerWeapon);
    } 
}
/** This function finds the data-type of the user's chosen weapon and compares it against the computer's.
 * a series of if else statements are used and depending on the winner increaseComputerScore() or
 * increaseUserScore is ran"
 */
function checkWinner(computerWeapon) {
    let userWeapon = document.getElementById("user-choice");
    let userSelection = parseInt(userWeapon.getAttribute("data-type"));
    if (userSelection === computerWeapon) {
        let playAgain = document.getElementById("play-again");
        playAgain.innerHTML = "IT'S A TIE! Want to play again? Choose your weapon!";
        endGame();
    } else if (userSelection == 0) {
        if (computerWeapon == 1) {
            increaseComputerScore();
        } else if (computerWeapon == 2) {
            increaseUserScore();
        }
    } else if (userSelection == 1) {
        if (computerWeapon == 2) {
            increaseComputerScore();
        } else if (computerWeapon == 0) {
            increaseUserScore();
        }
    } else if (userSelection == 2) {
        if (computerWeapon == 0) {
            increaseComputerScore();
        } else if (computerWeapon == 1) {
            increaseUserScore();
        }
} }

/**This function increases the user's score by 1, displays winning text and offers a new game. The
 * endGame function is then ran. 
 */
function increaseUserScore() {
    let score = parseInt(document.getElementById("won").innerText);
    document.getElementById("won").innerText = ++score;
    let playAgain = document.getElementById("play-again");
    playAgain.innerHTML = "YOU WIN! Want to play again? Choose your weapon!";
    endGame();
    
}
/**This function increases the computer's score by 1, displays losing text and offers a new game. The
 * endGame function is then ran.
 * 
 */
function increaseComputerScore() {
    let score = parseInt(document.getElementById("lost").innerText);
    document.getElementById("lost").innerText = ++score;
    let playAgain = document.getElementById("play-again");
    playAgain.innerHTML = "YOU LOST! Want to play again? Choose your weapon!";
    endGame();
}

/**This function hides the play button from view.
 */
function endGame() {
    let playsButton = document.getElementById("show-play-button");
    playsButton.setAttribute('id', 'play-button');
}