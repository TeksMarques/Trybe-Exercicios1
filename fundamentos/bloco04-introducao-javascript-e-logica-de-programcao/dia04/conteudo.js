
// objetos

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
}

console.log('A jogadora ' + ' ' + player['name'] + ' ' + player['lastName'] + ' ' + 'tem ' + player['age'] + ' anos de idade.');

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
player['fullName'] = player['name'] + ' ' + player['lastName'];

console.log('A jogadora ' + player['fullName'] + ' ' + 'foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' de prata.');

// uso do for in
// estrutura do for in

for (let key in player) {
    console.log(key);
    // pode se usar o nome key para mostrar o que tem no objeto
    // pode se usar o nome do objeto "ex: player"
    // pode se usar o nome da chve que vc quer "ex: player.name ou player['name'] 
    // pode se usar onome da chave + [key] para saber apenas os valores agregados

}

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for ( let key in names) {
    console.log('Olá ' + names[key]);
  }
//
  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for ( let key in car) {
    console.log(car)
  }

// funções

// estrutura da função

function nomeDaFundacao(param1, param2) {
    // codigo que irá fazer alguma coisa
    //param = paramentros - se usa quando precisa agregar valor de fora p dentro da função 
    // se finaliza com uma resposto: return
    // podemos declarar variaveis dentro da função

    return resultado;
}
// OBS: todo o projeto vai ser desenvolvido com function
// decompor uma string e gerar um array com suas palavras
let arquivoTexto = 'Rodrigo Fabiana Arthur Teresa Petala';
let arrayNomes = arquivoTexto.split(' ');
// usar pesquisa sobre manipulação de string: o comando split
console.log(arrayNomes);

// transformando array em string e uso do for/of
let novaString = '';

for(let nome of arrayNomes){
    novaString += nome + '%'
}
console.log(novaString)
// o maior numero

let numeros = [3, 7, 13, 9, 100, 45, 123, 3];

let maiorNumero = Math.max.apply(null, numeros);

console.log(maiorNumero);

//uso do for/of p percorer array 

for ( numero of numeros){
    console.log(numero * 3);
}

// uso do for/of na string



