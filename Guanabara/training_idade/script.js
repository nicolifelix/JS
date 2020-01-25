function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //apresenta 4 digitos do ano
    var fano = document.getElementById('txtano')//pega o ano do formulario
    var res = document.querySelector('div#res')//verifica o resultado do form
    if (fano.value.length == 0 || Number(fano.value) > ano){ //se ano do formulario for 0 ou amior q o ano atual
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        //colocando a foto via script
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 12 ){
                //criança
                img.setAttribute('src', 'img/boy.png')
            } else if (idade < 23){
                //jovem
                img.setAttribute('src', 'img/homemjovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'img/homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso.png')
            }  

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 12 ){
                //criança
                img.setAttribute('src', 'img/girl.png')
            } else if (idade < 23){
                //jovem
                img.setAttribute('src', 'img/mulherjovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'img/mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosa.png')
            }  
        }
        res.style.textAlign = 'center' //centraliza texto
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}