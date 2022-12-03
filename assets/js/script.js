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
    console.log("gameSelector success")
}


function startGame() {

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
