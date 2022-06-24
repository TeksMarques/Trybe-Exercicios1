// comandos feitos por atanes

let arrayNomes = ['marcelo', 'carla', 'marlene', 'adriana'];
let arrayNumeros = [1, 23, 55, 9, 11];

let qualquerCoisa = [12, 'atanes', 6, true];

// array é uma variavel composta que permite adicionar qualquer elemento

for(let index = 0; index < arrayNomes.length; index+=1) {
    console.log(arrayNomes[index]);
}

// ferramente Math.random() gera numeros aleatórios entre numeros decimais
// para numeros inteiros - Math.floor(Math.random() * 10) + 1;
// na pratica

let n1 = Math.floor(Math.random() * 60) + 1;

console.log(n1);

// existe ramificações do Math - .max(para comparar e resultar o maior numero)

console.log(Math.max(13, 5, 12));

