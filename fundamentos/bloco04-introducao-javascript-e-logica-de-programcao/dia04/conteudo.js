
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