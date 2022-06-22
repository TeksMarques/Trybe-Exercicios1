// for é usado para não repetir o mesmo comando varias vezes

let numero = 7;

for (let contador =1;contador <= 9;contador++) {
    console.log('');
    console.log(numero * contador);
}

let listaDeNomes = ['Teresa', 'Victor', 'Renata'];

for (let index = 0; index < listaDeNomes.length; index+=1){
    let mensagem = 'Boas Vindas: ' + listaDeNomes[index] + '!';
    console.log(mensagem);
}

//exercicio fixaçao 1

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index =0;index < groceryList.length;index+=1) {
    console.log(groceryList[index]);
}

// uso do for/of

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// onde o "of" vai mostrar as propriedades;


let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

// e tambem permite somar um valor a cada elemento, no caso 1

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nome of names) {
    console.log(nome)
}