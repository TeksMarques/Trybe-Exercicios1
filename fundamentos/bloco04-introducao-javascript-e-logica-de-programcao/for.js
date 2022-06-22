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