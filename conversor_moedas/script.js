var ValorEmDolar = 30;
var CotacaoDoDolar = 4.91;

var ValorEmReal = ValorEmDolar*CotacaoDoDolar;
ValorEmReal = ValorEmReal.toFixed(2);

alert('R$ ' + ValorEmReal);