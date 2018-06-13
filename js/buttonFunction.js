const delayDisplay = document.getElementById("d1");


function  randomizedAlert() {
    let randomNumber = Math.floor(Math.random() * 5000);
    setTimeout( function () {
        alert("Hello! I am an alert box!!")
    }, randomNumber);
    console.log(delayDisplay);
    delayDisplay.innerText = randomNumber + "ms till alert";
}