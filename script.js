"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; //Quantos milésimos valem 1 segundo?
var cron;

//Inicia o temporizador
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 60) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 60) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
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