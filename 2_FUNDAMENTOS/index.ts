let x: number = 3;

console.log(x);

x = 16;

console.log(typeof x);

const y: number = 15.584846;

console.log(typeof y);

console.log(y);

console.log(y.toPrecision(3));

//2 string

const firstName: string = 'Fagner';

console.log(firstName.toUpperCase());

const lastName: string = 'Henrique';

let fullName: string;

fullName = firstName + ' ' + lastName;

console.log(fullName);

console.log(typeof fullName);

// 3 boolean

let a: boolean = false;

console.log(a);
console.log(typeof a);

a = true;

console.log(a);

// 4 inference e annotation

const ann: string = ' Teste';

const inf = 'Testando';

//5 compile automatico

let q = 20;

console.log(q);

q = 11;

console.log(q);

/*
Para gerar a compilação automática podemos utilizar o comando 'tsc -w' 
*/

///6 desafio

let num: number = 5;
let numSt = num.toString();

const stNum = `Variavél que tinha o número 5 como number e foi convertida para string: ${numSt}`;
console.log(stNum);
