const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }    
  }

  testingScope(true);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;

    return oddsAndEvens
  }

  const sortOaE = sortOddsAndEvens();
  console.log(`Os números ${sortOaE} se encontram ordenados de forme crescente!`)

  // parte 2

  //exercicio 1

  const fatorial = (number) => {
    let valor =1;

    for (index = 2; index < number; index +=1) {
        valor *= index
    }

    return valor
  }

  // forma recusiva

  const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
  console.log(factorial(5));

  // exercicio 2

  const maiorPalavra = (text) => {
    const arrayPalavras = text.split(' ');
    let tamanhoMax = 0;
    let resultado = '';

    for (palavras of arrayPalavras) {
        if (palavras.length > tamanhoMax) {
            tamanhoMax = palavras.length;
            resultado = palavras;
        }
    }
    return resultado
  }

  console.log(maiorPalavra('Antonio foi ao banheiro e não sabemos o que aconteceu'));

  //exercicio 4 

  //função 1

  const mudarPalavra = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split(' ');
    for (index = 0; index < fraseArray.length; index +=1) {
       if (fraseArray[index] === 'x') {
        fraseArray[index] = nome
       } 
    }
    return fraseArray.join(' ')
  }

  console.log(mudarPalavra('Teresa'));

  // função 2

  const minhasSkills = (func) => {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    let resultado = `${func} Minhas três habilidade são:`
    skills.forEach((skill) => {
        resultado = `${resultado} - ${skill} `
    });
    return resultado; 
  }

  console.log(minhasSkills(mudarPalavra('Teresa')));

  






