// var filmeHP = "https://musicart.xboxlive.com/7/5dbd5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080";

// var filmeAC = "https://images.justwatch.com/poster/16690948/s592/arrival";

// var filmeR = "https://br.web.img3.acsta.net/medias/nmedia/18/92/75/28/20215618.jpg";

// var listaFilmes = []
// listaFilmes[0] = "https://musicart.xboxlive.com/7/5dbd5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080";
// listaFilmes[1] = "https://images.justwatch.com/poster/16690948/s592/arrival";
// listaFilmes[2] = "https://br.web.img3.acsta.net/medias/nmedia/18/92/75/28/20215618.jpg";

// document.write('<img src='+ listaFilmes[0] +'>');
// document.write('<img src='+ listaFilmes[1] +'>');
// document.write('<img src='+ listaFilmes[2] + '>');

// URLs dos pôsteres de filmes
var listaFilmes = [
    "https://musicart.xboxlive.com/7/5dbd5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
    "https://images.justwatch.com/poster/16690948/s592/arrival",
    "https://br.web.img3.acsta.net/medias/nmedia/18/92/75/28/20215618.jpg"
];

// Loop para exibir cada pôster na página
for (var i = 0; i < listaFilmes.length; i++) {
    // Usando document.write para adicionar as tags de imagem ao corpo da página
    document.write('<img src=' + listaFilmes[i] + '>');
}

// O código acima exibe os pôsteres dos filmes em uma página HTML.
// A listaFilmes contém as URLs dos pôsteres, e o loop for percorre cada URL, adicionando uma tag de imagem ao corpo da página.

// OBSERVAÇÃO: O uso de document.write pode não ser a melhor prática em casos mais complexos. 
// Em aplicações do mundo real, é comum manipular o DOM de maneira mais sofisticada usando métodos como appendChild.
// Este exemplo foi mantido simples para fins de aprendizado.
