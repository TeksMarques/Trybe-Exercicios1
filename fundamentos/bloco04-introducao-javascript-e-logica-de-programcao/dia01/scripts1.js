// parte variaveis

const myName = "teresa";
const birthCity = "João Pessoa"
let birthYear = 1995;
birthYear = 2030;
// birthCity = "santa rita"; não é possivel atribuir novo valor para uma constante(const)

 
console.log(myName);
console.log(birthCity);
console.log(birthYear); 

// tipos primitivos...
const base = 5;
let height = 8;
const area = base * height;
const perimeter = 5*2 + 8*2;


console.log(base);
console.log(height);
console.log(area);
console.log(perimeter); 


// if e else
let trybe = 19.40;

if (trybe >=14 && trybe < 14.40) {
    console.log("esquenta");
}
else if (trybe >= 16.30 && trybe < 17.50) {
    console.log("Aula ao vivo");
}
else if (trybe >= 19.40 && trybe < 20) {
    console.log("Fechamento");
}
else {
    console.log("fora dos monentos sincronos");
}