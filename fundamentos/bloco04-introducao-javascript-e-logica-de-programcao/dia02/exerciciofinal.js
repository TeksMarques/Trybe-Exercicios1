//item 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index <numbers.length; index +=1){
    console.log(numbers[index])
}

//item 2

let soma = 0;

for (let index1 = 0; index1 < numbers.length; index1 += 1) {
    soma += numbers[index1]
    console.log(soma)
}

// item 3 
let media = soma / numbers.length
console.log(media)

//item 4
if (media > 20) {
    console.log('valor maior que 20');
}else{
    console.log('valor menor ou igual a 20' );
}

//item 5

let maior = numbers[0];

for(let index2 = 0; index2 < numbers.length; index2 += 1) {
    if ( numbers[index2] > maior) {
        maior = numbers[index2];
    }else {
        maior = maior;
    }
    
}
console.log(maior);

//item 6

let impar = 0

for( let index3 = 0; index3 < numbers.length; index3 += 1) {
    if ( numbers[index3] % 2 !== 0) {
        console.log('esse número é impar')
    }else {
        console.log('nenhum valor ímpar encontrado');
    }
}console.log(impar);

// item 7

let menor = numbers[0]

for (let index4 = 0; index4 < numbers.length; index4 += 1 ) {
    if ( numbers[index4] < menor ) {
        menor = numbers[index4];
    }else{
        menor = menor
    }
}
console.log(menor);

//item 8

let array25 = [];

for (let index5 = 1; index5 <= 25; index5 += 1){
    array25.push([index5])
}
console.log(array25);

// item 9

for (let index6 = 0; index6 < array25.length; index6 += 1) {
    console.log(array25[index6] / 2);
}

// item bonus 1

console.log(numbers.sort());

// item bonus 3

let newNumbers = [];

for( index7 = 0; index7 < numbers.length; index7 += 1) {
    if ( index7 + 1 < numbers.length ) {
        newNumbers.push(numbers[index7] * numbers[index7 + 1])
    }else{
        newNumbers.push(numbers[index7] * 2)
    }
}
console.log(newNumbers);