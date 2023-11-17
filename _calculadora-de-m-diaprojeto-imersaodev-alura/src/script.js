/*O que teve em aula

var valorEmDolar = 30 //Valor a ser convertido
var cotDolarReal = 4.90 //Valor atual do dolar

var valorEmReal = valorEmDolar*cotDolarReal //conversão
valorEmReal = valorEmReal.toFixed(2) //Arredondamento

alert("Valor em Real: R$"+valorEmReal); //Saida
*/

//Desafio 1: Mudar a moeda para outro
//Desafio 2: Por o nome da pessoa
//Desafio 3: Converter anos luz em metros.
//Converter o fundo e a moedinha

/***********************************************
//Desafio 1: Converter Real para Iene

var valorEmReal = 28 //Valor a ser convertido
var cotIeneJap = 30.52 //Valor atual do Iene Japones

var valorEmIene = valorEmReal*cotIeneJap //conversão
valorEmIene = valorEmIene.toFixed(2) //Arredondamento
//Desafio 2: Por o nome da pessoa
var nome = "Gustavo" 
alert("Olá "+nome+"", aqui está o valor em Iene: Y "+valorEmIene); //Saida


**************************************/

//Desafio 3: Converter anos luz em metros.

var anoLuzMetro = 9460536207068016; //1  ano luz em metros
var anoLuz = 5; //Quanto a ser convertido
var nome = "Gustavo";
//conversão
var resultado = anoLuzMetro * anoLuz;

alert(
  "Olá " +
    nome +
    ".A conversão de " +
    anoLuz +
    " anos luzes em metros é: " +
    resultado
);
