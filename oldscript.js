//Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let counting = false;

//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch(){
    
    if (counting == true) {   
    seconds++;
    }
    
    //Logic to determine when to increment next value
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }

    }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }

    //Display updated time values to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}


function startStop(){

    if(counting === false){

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        counting = true;

    }
    else{
        // clearInterval faz com que o setInterval pare de rodar, será nesse momento que salvarei os valores no local storage
        let timeCounted = document.getElementById("display").innerHTML
        localStorage.setItem('timeCounted', timeCounted)

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        counting = false;

    }

}

//Function to reset the stopwatch
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";

}

function carregar() {
    var msg = window.document.getElementById('horas')
    var agora = new Date();
    var hora =  agora.getHours();
    var minutos = agora.getMinutes();

    horas.innerHTML = `${hora}:${minutos}h`

    if(hora <= 11) {
        document.body.style.backgroundColor = '#add8e6'
    } else if (hora >= 12 && hora <= 18) {
        document.body.style.backgroundColor = '#f1dd89'
        msg.style.color = 'black'
    } else {
        document.body.style.backgroundColor = '#567879'
    }


}