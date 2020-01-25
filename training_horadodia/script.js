function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 14
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'img/manha.png'
        document.body.style.background = '#ccd8e0'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'img/tarde.png'
        document.body.style.background = '#fec872'
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#16333b'
    }
        
}