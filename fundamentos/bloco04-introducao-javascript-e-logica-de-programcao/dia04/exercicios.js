//item 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log('Bem-vinda, ' + info.personagem);

info ['recorrente'] = 'Sim' 

console.log(info);

for(let chave in info){
    console.log(chave)
}
for(let valores in info){
    console.log(info[valores])
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

for( let informacoes in info ) {
    if ( informacoes === 'recorrente' && info[informacoes] === 'Sim' && info2[informacoes] === 'Sim' ){
        console.log('Ambos recorrentes')
    } else {
    console.log(info[informacoes] + ' e ' + info2[informacoes])
    }
}

// segundo objeto

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo + '.');

leitor.livrosFavoritos.push ({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
}
);
    
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');


// Parte II

