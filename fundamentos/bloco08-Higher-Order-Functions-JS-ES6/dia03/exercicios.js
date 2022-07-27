//Para fixar - parte 1 - uso do spread

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'manga', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'sorvete', 'gotas de chocolate'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const frutaAndItens = [...fruit,...additional]
  return frutaAndItens
};

console.log(fruitSalad(specialFruit, additionalItens));






