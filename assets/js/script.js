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
 * This function takes the data-type of the item the user clicked on and changes the image shown 
 * to represent the user's chosen "weapon". The function then runs the startGame() function.
 */
function gameSelector(weaponType) {
    if (weaponType === "0") {
        let rockElement = document.getElementById("user-choice");
        rockElement.outerHTML = `<span id="user-choice" data-type="0"><i class="fa-solid fa-hand-fist"></i></span>`;
        startGame();;
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


function startGame() {
 console.log("start game success")
}



function checkWinner() {

}


function endGame() {
        
}



function increaseUserScore() {

} 

function increaseComputerScore() {
   
}

function draw() {

}
