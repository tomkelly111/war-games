document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let weaponType = this.getAttribute("data-type");
            gameSelector(weaponType);
        });
    }
});

/**
 * This function takes the data-type (weaponType) of the item the user clicked on and changes the image shown 
 * to represent the user's chosen "weapon". The function then runs the startGame() function.
 */
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
        /**
        * The next else if statement applies if the random weapon option is chosen. A random number between 0-2
        * is generated and fed back into the start of the funciton.
        */
    } else if (weaponType === "3") {
        let randomWeapon = Math.floor(Math.random() * 3);
        let weaponType = randomWeapon.toString();
        gameSelector(weaponType);
    }
}

/** This function displays the play button and when the play button is clicked 
 * a random number between 0-2 is generated for the computer's weapon, the computer's weapon is then
 * displayed and the checkWinner() function is ran.
 */
function startGame() {
    /** Changes ID of play-button so that it is visible once user has selected their weapon */
    playButton = document.getElementById("play-button");
    playButton.setAttribute("id", "show-play-button");

    let letsBattle = document.getElementById("show-play-button");
    letsBattle.addEventListener("click", function(){ 
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
    })
}


/** This function pulls the user's chosen weapon and compares it against the computer's. 
 * based on this comparison the user's or the computer's score is increased.
 */
function checkWinner(computerWeapon) {
    let userWeapon = document.getElementById("user-choice");
    /**converts user-choice data-type into an int */
    userSelection = parseInt(userWeapon.getAttribute("data-type"));
    /**where selections are equal result is a tie/draw */
    if (userSelection == computerWeapon) {
        draw();
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
}

}


function endGame() {
        
}



function increaseUserScore() {
    console.log("increase user score success")
} 

function increaseComputerScore() {
    console.log("increase computer score success")
}

function draw() {

}
