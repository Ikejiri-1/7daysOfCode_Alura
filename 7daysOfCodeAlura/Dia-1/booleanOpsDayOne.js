let numeroUm = 1;
let stringUm = "1";
let numeroTrinta = 30;
let stringTrinta = "30";
let numeroVinte = 20;
let stringVinte = "20";


numeroUm == stringUm ? console.log(" As variáveis numeroUm e stringUm possuem o mesmo valor porém tipos diferentes") : console.log(" As variáveis numeroUm e stringUm possuem valores diferentes");
// == converte o valor de stringUm para número antes de comparar, então o resultado é true.
numeroUm === stringUm ? console.log(" As variáveis numeroUm e stringUm possuem o mesmo valor e tipo") : console.log(" As variáveis numeroUm e stringUm possuem valores diferentes");
// retorna false, pois === compara valor e tipo, e sendo um uma string e outro um número, o resultado é false.
numeroTrinta == stringTrinta ? console.log(" As variáveis numeroTrinta e stringTrinta possuem o mesmo valor porém tipos diferentes") : console.log(" As variáveis numeroTrinta e stringTrinta possuem valores diferentes");

numeroVinte == stringVinte ? console.log(" As variáveis numeroVinte e stringVinte possuem o mesmo valor porém tipos diferentes") : console.log(" As variáveis numeroVinte e stringVinte possuem valores diferentes")
