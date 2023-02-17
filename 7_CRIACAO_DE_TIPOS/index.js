"use strict";
// 1 GENERICS
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData('testando generic'));
console.log(showData(true));
console.log(showData('teste'));
// 2 CONSTRAINT EM GENERIC
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: 'Porta', cor: 'Branca' };
const otherProduct = { name: 'Carro', wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: 'Roupa' };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branco' };
const myPen = {
    name: 'Caneta BIC',
    wheels: false,
    engine: false,
    color: 'Azul',
};
console.log(myCar);
console.log(myPen);
// 4 TYPE PARAMETERS
function getSomeKey(obj, key) {
    return `A chave ${[key]} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB',
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: 'Fagner',
    age: 30,
    hasDriverLicense: true,
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
// console.log(showCharName('teste', 'asd'));
// 6 TYPEOF TYPE OPERATOR
const userName = 'Fagner';
const userName2 = 'Henrique';
const username4 = 'Joaquim';
console.log(username4);
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga',
};
function showKm(km) {
    console.log(`O veículo tem a km de ${km}`);
}
console.log(showKm(newTruck.km));
const newCar = {
    km: 5000,
    kg: 1000,
};
console.log(showKm(newCar.km));
const someVar = 5;
const testing = 'some text';
