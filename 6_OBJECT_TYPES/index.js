"use strict";
// 1 TIPO DE OBJETO PARA FUNÇÃO COM INTERFACE
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log('O produto está disponível');
    }
    else {
        console.log('produto não disponível');
    }
}
const shirt = {
    name: 'Camisa',
    price: 19.99,
    isAvailable: true,
};
showProductDetails(shirt);
showProductDetails({ name: 'Tênis', price: 129.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função de usuário é: ${user.role}`);
    }
    else {
        console.log('A função de usuário é: comum');
    }
}
const u1 = { email: 'fagner@email.com', role: 'Admin' };
const u2 = { email: 'henrique@email.com' };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: 'vw',
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10,
};
coords.y = 15;
console.log(coords);
const fagner = {
    name: 'Fagner',
    age: 28,
};
console.log(fagner);
const goku = {
    name: 'Goku',
    age: 50,
    superpower: ['kamehameha', 'Genki Dama'],
};
console.log(goku);
console.log(goku.superpower[1]);
const faguins = {
    name: 'Fagnersro',
    type: 'shotgun',
    caliber: 12,
};
console.log(faguins);
console.log(faguins.caliber);
// 7 READEONLY ARRAY
let myArray = ['Maça', 'Laranja', 'Banana'];
// myArray[3] = 'Mamão' não me permite modificar o array diretamente
console.log(myArray);
myArray.forEach(item => {
    console.log('Fruta: ' + item);
});
myArray = myArray.map(item => {
    return `Fruta: ${item}`;
});
console.log(myArray);
// number[]
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6];
// const mixedArray: fiveNumbers = [1, true, 'teste', 4, 5];
console.log(myNumberArray);
const anotherUser = ['Fagner', 30];
console.log(anotherUser[0]);
anotherUser[0] = 'Henrique';
console.log(anotherUser[0]);
// anotherUser[1] = 'teste'
// 9  TUPLAS COM READONLY
function showNumbers(numbers) {
    // numbers[0] = 10;
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
