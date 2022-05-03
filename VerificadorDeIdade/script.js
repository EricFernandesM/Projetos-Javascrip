function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.querySelector('div#res')
    var fano = Number(document.getElementById('txtano').value)
    if (fano.length == 0 || fano > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 1 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe-h.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-h.png')
            }else if(idade < 65){
                //Adulto
                img.setAttribute('src', 'adulto-h.png')
            }else {
                //Idoso
                img.setAttribute('src', 'idoso-h.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 1 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe-m.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            }else if(idade < 65){
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            }else {
                //Idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}