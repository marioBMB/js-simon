const totNumbers = 5;
const timerSec = 10;
const numbers = new Array(totNumbers);

const numbersBox = document.getElementsByClassName("numbers-box")[0];
const numbersHead = document.getElementsByClassName("numbers-head")[0];
const numbersTextBox = document.getElementsByClassName("numbers")[0];



window.addEventListener("DOMContentLoaded", function(){
    render();
    setTimeout(main, timerSec * 1000);
});


function render(){

    for (let i = 0; i < totNumbers; i++){
       numbers[i] = getRandomNumber(1, 100);
       numbersTextBox.innerHTML = [...numbers]
    }
    numbersHead.innerText = "Osserva i seguenti numeri per "+timerSec +"s:";
}


function main(){

    numbersTextBox.innerHTML = "";
    numbersBox.innerHTML = "";

    alert("Inserisci i numeri rispettando il loro ordine originario: ");
    const userNumbers = new Array(totNumbers);

    for (let i = 0; i < totNumbers; i++){
        userNumbers[i] = parseInt(prompt((i+1)+"° numero:").trim());
    }

    let rightAnswers = getCorrectAnswers(userNumbers);

    if (rightAnswers.length > 0){

        numbersHead.innerHTML = "Hai totalizzato " + rightAnswers.length + "/" +totNumbers+"<br> (risposte corrette in verde)"
        numbersBox.append(numbersHead);
        numbersTextBox.innerHTML = formatAnswers(userNumbers, numbers);
        numbersBox.append(numbersTextBox);
    }
    else {
        numbersHead.innerText = "Non hai memorizzato neanche un numero!";
        numbersBox.append(numbersHead);
    }
}


function getCorrectAnswers(answers){

    let correct = [];

    for(let i=0; i < answers.length; i++){
        if (answers[i] == numbers[i]){
            correct.push(answers[i]);
        }
    }
    return correct;
}


function formatAnswers(inputAnswers, answers){

    let formattedArr = [...answers];

    for(let i=0; i < answers.length; i++){
        if (inputAnswers[i] == answers[i]){
            formattedArr[i] = "<span class='correct'>" + numbers[i] + "</span>";
        }
    }
    return formattedArr;
}



function getRandomNumber(min, max){

    return Math.floor(Math.random() * (max - min) + 1) + min;
}