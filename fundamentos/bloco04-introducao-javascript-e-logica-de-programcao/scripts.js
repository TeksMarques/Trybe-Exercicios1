// item 1
const a = 4
const b = 8

console.log('Soma:', (a + b) );
console.log('subtração' , (a-b));
console.log('multiplicação' , (a*b));
console.log('divisão' , (a/b));
console.log('módulo', (a%b));

// item 2
const num1 = 20;
const num2 = 10;

if (num1 > num2) {
    console.log('a é maior que b');
}else{
    console.log('b é maior que a');
}

// item 3
const c = 189;
const d = 156;
const e = 138;

if (c>d && c>e) {
    console.log("c é o maior");
}else if (d>c && d>e){
    console.log('d é o maior');
}else{
    console.log('e é o maior');
}

// item 4
const f = 10

if (f > 0) {
    console.log('positivo');
}else if (f > 0) {
    console.log('negativo');
}else{
    console.log('0');
}

//item 5
let ladoA = 60;
let ladoB = 80;
let ladoC = 40;

let somaDosAngulos = ladoA + ladoB + ladoC;
let angulosPositivos = ladoA > 0 && ladoB > 0 && ladoC >0;


if (angulosPositivos){
    if (somaDosAngulos === 180){
        console.log(true);
    }else{
        console.log(false);
    };
}else{
    console.log('ângulo inválido');
}

//item 6
const xadrez = 'bispo'

switch (xadrez.toLowerCase()) {
    case 'bispo':
        console.log('bispo -> andar na diagonal')
        break;
    case 'rei':
        console.log('rei -> andar uma casa em qualquer direção')
        break;
    case 'rainha':
        console.log('rainha -> andar para qualquer direção')
        break;
    case 'peao':
        console.log('Peao -> andar uma casa para frente')
        break;
    case 'torre':
        console.log('torre ->')
        break;
    default:
    console.log('erro -> peça nao existe')
    break;

}

//item 7
let nota = 75;

if (nota < 0 || nota > 100) {
    console.log('erro, nota incorreta');
}else if (nota >= 90) {
    console.log('A'); 
}else if (nota >=80) {
    console.log('B');
}else if (nota >=70) {
    console.log('C');
}else if (nota >=60) {
    console.log('D');
}else if (nota >=50) {
    console.log('E');
}else{ 
    console.log('F');
}

//item 8

const num7 = 1;
const num8 = 5;
const num9 = 7;

if (num7 % 2 === 0 || num8 % 2 === 0 || num9 % 2 === 0){
    console.log('true');
}else{
    console.log('false');
}

//item 9

const g = 4;
const h = 5;
const i = 8;

if ( g % 2 === 1 || h % 2 === 1 || i % 2 === 1) {
    console.log('true');
}else{
    console.log('false');
}


