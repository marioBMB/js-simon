

const numeriCasuali = 5;
const timerSec = 10;
const numbers = new Array(numeriCasuali);
const numbersBox = document.getElementsByClassName("numbers-box")[0];
const numbersHead = document.getElementsByClassName("numbers-head")[0];
const numbersTextBox = document.getElementsByClassName("numbers")[0];



window.addEventListener("DOMContentLoaded", function(){
    render();
    setTimeout(main, timerSec * 1000);
});


function render(){

    let string = "";
    for (let i = 0; i < numeriCasuali; i++){
       numbers[i] = getRandomNumber(1, 100);
       string = [...numbers];
       console.log(string);
       numbersTextBox.innerHTML = string;
    }
    numbersHead.innerText = "Osserva i seguenti numeri per "+timerSec +"s:";
}


function main(){

    numbersBox.innerHTML = "";
    alert("Inserisci i numeri memorizzati nel loro ordine: ");
    const userNumbers = new Array(numeriCasuali);

    for (let i = 0; i < numeriCasuali; i++){
        userNumbers[i] = parseInt(prompt((i+1)+"° numero:").trim());
    }

    let correctAnswers = getCorrectAnswers();

    if (correctAnswers.length > 0 ){

        numbers.innerHTML = [...correctAnswers];
        numbersHead.innerText = "Le risposte corrette:"
        numbersBox.append(numbersHead);
        numbersBox.append(numbers);
    }
    else {
        numbersHead.innerText = "Non hai memorizzato neanche un numero!";
        numbersBox.append(numbersHead);
    }
}


function getCorrectAnswers(){

    let correct = [];

    for(let i=0; i < userNumbers.length; i++){
        if (userNumbers[i] == numbers[i]){
            correct[i] = i;
        }
    }
    return correct;
}



function getRandomNumber(min, max){

    return Math.floor(Math.random() * (max - min) + 1) + min;
}