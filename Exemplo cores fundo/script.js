function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date();
    var hora =  agora.getHours();
    var minutos = agora.getMinutes();

    msg.innerHTML = `Agora são ${hora}:${minutos}h`

    if(hora <= 11) {
        img.src = 'imagens/cloudmorning-icon.png'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/cloudsafternoon-icon.png'
        document.body.style.backgroundColor = '#f1dd89'
        msg.style.color = 'black'
    } else {
        img.src = 'imagens/cloudsnoon-icon.png'
        document.body.style.backgroundColor = '#567879'
    }

}