
var timer = document.getElementById("timer");
var timer = document.getElementById("timer");
var operation = document.getElementById("operationDiv");
var gameStarter = document.getElementById("startDiv");
var operations = [];


    let randomNumber1 = Math.floor(Math.random()*9)+1;
    let randomNumber2 = Math.floor(Math.random()*9)+1;
    var result = randomNumber1 + randomNumber2;

    operation.textContent = "Escoge un número que sea la suma de " + randomNumber1 + " + " + randomNumber2;
        // console.log(randomNumber1, randomNumber2);
        // console.log(result);
    
    function createAndDisplayRandomNums() {
        let randomNumber1 = Math.floor(Math.random()*9)+1;
        let randomNumber2 = Math.floor(Math.random()*9)+1;
        var result = randomNumber1 + randomNumber2;

        operation.textContent = "Escoge un número que sea la suma de " + randomNumber1 + " + " + randomNumber2;

        console.log(randomNumber1, randomNumber2);
        console.log(result);
    }

var i = 60;
var score = 0;

countDown = setInterval(function () {
    i--;
    timer.textContent = "Time: " + i + " s";
    if (i === 0) {
        clearInterval(countDown);
    }
}, 1000);


// window.onload = getRandomSum();
// console.log(getRandomSum()+" este es el result");

// operationText();
