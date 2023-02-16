"use strict";
// 1  VOID FUNÇÕES QUE NÃO RETORNAM NADA
function withoutReturn() {
    console.log('Esta função não tem retorno!');
    // return 1;
}
withoutReturn();
// 2 CALLBACK COMO ARGUMENTO
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log('Preparando a função!');
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, 'Fagner');
preGreeting(greeting, 'Henrique');
// 3  GENERIC FUNCTION
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c']));
// console.log(firstElement("teste"))
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2,
    };
}
const newObject = mergeObjects({ name: 'Fagner' }, { age: 28, job: 'Programmer' });
console.log(newObject);
//4 CONSTRAINTS
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber('12', '5'));
// console.log(biggestNumber('12', 5));
// 5 ESPECIFICAR TIPO DE ARGUMENTO
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays([1, 2, 3], ['teste', 'testando']));
// 6 - PARÂMETROS OPCIONAIS
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem ?`;
    }
    return `Olá ${name}, tudo bem ?`;
}
console.log(modernGreeting('Fagner'));
console.log(modernGreeting('Henrique', 'Dr'));
// 7 PARÂMETRO DEFAULT
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(15, 12));
// 8 UNKNOW
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log('X é um número');
    }
}
doSomething([1, 2, 3]);
doSomething(5);
// 9  NEVER
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage('Algum errorororororo');
// 10 REST OPERATOR
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(2, 348, 2348));
// console.log(sumAll('teste'))
//11 - DESTRUCTURING COMO PARÂMETRO
function showProductDetails({ name, price, }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = { name: 'Camisa', price: 49.99 };
console.log(showProductDetails(shirt));
// console.log(showProductDetails({ name: 'teste', age: 30 }));
// console.log(showProductDetails([1, 2, 3]));
