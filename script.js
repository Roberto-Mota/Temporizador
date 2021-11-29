"use strict"

var hh = 0;
var mm = 0;
var ss = 0;
var cron;
let saved = false

//Inicia o temporizador
function start() {
    saved = false;
    cron = setInterval(timer, 1000);
    // cron = setInterval(() => { timer(); }, 1000);
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    saveTime();
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function stop() {
    saveTime();
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

function saveTime() {
    //Preciso pegar o valor no local storage, fazer um parsing, somar as duas partes (a que acabei de usar + a que já estava guardada no local)

    let passedHours = 0;
    let passedMinutes = 0;
    let passedSeconds = 0;
    let savedHours = 0;
    let savedMinutes = 0;
    let savedSeconds = 0;

    if (saved == false) {
    // Pegar o tempo decorrido agora
    let passedTime = document.getElementById('counter').innerText

    passedHours = parseInt(passedTime.slice(0, 2), 10)
    passedMinutes = parseInt(passedTime.slice(3, 5), 10)
    passedSeconds = parseInt(passedTime.slice(6, 8), 10)
    console.log ("Passed: " + passedHours, passedMinutes, passedSeconds)

    // Pegar o tempo guardado no storage
    let tempoEstudo = localStorage.getItem('tempoEstudo')

    if (tempoEstudo == null) {
        savedHours = 0;
        savedMinutes = 0;
        savedSeconds = 0;
    } else {
    savedHours = parseInt(tempoEstudo.slice(0, 2), 10)
    savedMinutes = parseInt(tempoEstudo.slice(3, 5), 10)
    savedSeconds = parseInt(tempoEstudo.slice(6, 8), 10)
    }

    // sempre especifique uma base quando estiver usando parseInt. (aqui o número é base 10)

    console.log("Saved: " + savedHours, savedMinutes, savedSeconds)

    if (Number.isNaN(savedHours)){
        savedHours = 0;
    }
    if (Number.isNaN(savedMinutes)){
        savedMinutes = 0;
    }
    if (Number.isNaN(savedSeconds)){
        savedSeconds = 0;
    }

    // Somar com o que estava guardado (se não for null)
    let sumHours = passedHours + savedHours
    let sumMinutes = passedMinutes + savedMinutes
    let sumSeconds = passedSeconds + savedSeconds

  while (sumSeconds > 60) {
      sumMinutes += 1
      sumSeconds -= 60
  }

  while (sumMinutes > 60) {
    sumHours += 1  
    sumMinutes -= 60
  }

  let sumTime = (sumHours < 10 ? '0' + sumHours : sumHours) + ':' + (sumMinutes < 10 ? '0' + sumMinutes : sumMinutes) + ':' + (sumSeconds < 10 ? '0' + sumSeconds : sumSeconds);

  localStorage.setItem('tempoEstudo', sumTime)
  saved = true;
}
}
//Faz a contagem do tempo e exibição



function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 60) { //Verifica se deu 60 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 60) { //Verifica se deu 60 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    //Retorna o valor tratado
    return format;
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