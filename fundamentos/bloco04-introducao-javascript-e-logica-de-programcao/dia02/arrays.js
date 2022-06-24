// criação de arrays

let pizzas = ['4 queijos', 'frango com catupiry', 'calabresa', 'palmito', 'chocolate'];

// cada item do array se chama de indice e sua contagem começa a partir do 0

// para adicionar novos valores no fim - nomedavariavel.push('novovalor');
// para adicionar novos valores no começo - .unshift
// para retirar um indice - .pop(para o ultimo indice) .shift(para o primeiro indice )
// para saber qual a posição do indice - nomedavariavel.indexOf(nomedoindice)

pizzas.push('peito de peru');
pizzas.push('gratinada');

// para saber o tamanho do array - nomedavariavel.length - pode ser usado dentro do console.log 
// para saber qual é o ultimo indice - .lenght -1
// para ordernar o array em ordem alfabetica ou numerica - nomedavariavel.sort(); - tbm pode ser usado dentro do console.log

console.log(pizzas.length);
console.log(pizzas);
console.log(pizzas.sort());

// mostrar um unico elemento e sua posição

console.log(pizzas[0]);

// laço de repetiçao - for

for (let index = 0; index < pizzas.length; index+=1) {
    console.log(pizzas[index]);
}

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

console.log(menu[1]);
menu.push('Contato');
