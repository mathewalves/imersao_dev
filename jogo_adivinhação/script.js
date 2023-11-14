var numeroSecreto = parseInt(Math.random()*21);

while (chute != numeroSecreto)
{
    var chute = prompt('Digite um número entre 1 e 20');

    if (chute == numeroSecreto)
    {
        alert('Parabéns! Você Acertou :)');
    } 
    else if (chute > numeroSecreto)
    {
        alert('Errouu... O número secreto é menor');
    }
    else if (chute < numeroSecreto)
    {
        alert('Errouu... O número secreto é maior')
    }
}