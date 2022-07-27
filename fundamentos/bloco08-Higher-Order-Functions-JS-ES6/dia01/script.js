const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
    // Adicione seu código aqui
    return numbers.find((numeros) => numeros % 3 === 0 && numeros % 5 === 0)
}
console.log(findDivisibleBy3And5())



const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
    // Adicione seu código aqui
  return names.find((name) => name.length === 5);
}

console.log(findNameWithFiveLetters());

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    // Adicione seu código aqui
    return musicas.find((musica) => musica.id === id);
  }
  
  console.log(findMusic('31031685'))


  const names1 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

  const hasName = (arr, name) => {
    //Adicione seu código aqui
    return arr.some((nome) => nome === name);
  }
  
  console.log(hasName(names1, 'Ana'))

  const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    //Adicione seu código aqui
    return arr.every((idade) => idade.age >= minimumAge)
  }
  
  console.log(verifyAges(people, 18));

  const people1 = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  // Adicione se código aqui
  people1.sort((pessoaA, pessoaB) => pessoaA.age - pessoaB.age );
  people1.sort((pessoaA, pessoaB) => pessoaB.age - pessoaA.age )
  
  console.log(people1);

  //exercicios do course

  

