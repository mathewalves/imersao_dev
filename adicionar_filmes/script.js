function adicionarFilme()
{
    var filmeFav = document.getElementById ('filme').value;
    var elementoListaFilmes = document.getElementById ('listaFilmes');

    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src=' + filmeFav + '>';
    document.getElementById('filme').value = "";

    // Loop para exibir cada pôster na página
    for (var i = 0; i < elementoListaFilmes.length; i++) {
        document.write('<img src=' + elementoListaFilmes[i] + '>'); // Usando document.write para adicionar as tags de imagem ao corpo da página
    }
}