function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#c7d15a'
    }else if(hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#c68a73'
        //boa tarde
    }else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#556775'
        //boa noite
    }
}
