function openCity(evt, cityName) {
    // Declara todas as variaveis
    var i, abaconteudo, abalinks

    // Selecione todos os elementos com a class=abaconteudo e oculte
    abaconteudo = document.getElementsByClassName('abaconteudo')
    for (i = 0; i < abaconteudo.length; i++) {
        abaconteudo[i].style.display = 'none'
    }
    //Obitenha todo os elementos com a class=abalinks e remova a classe "active"
    abalinks = document.getElementsByClassName('abalinks')
    for (i = 0; i < abalinks.length; i++) {
        abalinks[i].className = abalinks[i].className.replace('active', ' ')
    }
    //Exibe a aba atual e adcione a classe "ativo" ao botão que abriu a aba
    document.getElementById(cityName).style.display = 'block'
    evt.currentTarget.className += ' active'

}