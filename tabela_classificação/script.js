var paulo = 
{
    nome:'Paulo',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
};

var rafa = 
{
    nome:'Rafa',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
};

var gui = 
{
    nome:'Gui',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
};

var elementoTabela = document.getElementById('tabelaJogadores')

function exibirnaTela()
{
    elementoTabela.innerHTML = `
    <tr>
    <td>${paulo.nome}</td>
    <td>${paulo.vitoria}</td>
    <td>${paulo.empate}</td>
    <td>${paulo.derrota}</td>
    <td>${paulo.pontos}</td>
    <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
    <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
    <td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
    </tr>
    `;
}

exibirnaTela();




function adicionarVitoria(jogador)
{
    jogador.vitoria++
    jogador.pontos = jogador.pontos + 3
    exibirnaTela();
}
function adicionarEmpate(jogador)
{
    jogador.empate++
    jogador.pontos++
    exibirnaTela();
}
function adicionarDerrota(jogador)
{
    jogador.derrota++
    exibirnaTela();
}