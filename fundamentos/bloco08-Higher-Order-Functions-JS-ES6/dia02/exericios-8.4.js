
//exercicio 1 - 
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const flatten = arrays.reduce((acc, curr) => acc.concat(curr), [])
    // escreva seu código aqui
  console.log(flatten)



