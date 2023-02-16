// 1 TIPO DE OBJETO PARA FUNÇÃO COM INTERFACE

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name} e seu preço é R$${product.price}`
  );
  if (product.isAvailable) {
    console.log('O produto está disponível');
  } else {
    console.log('produto não disponível');
  }
}

const shirt: Product = {
  name: 'Camisa',
  price: 19.99,
  isAvailable: true,
};

showProductDetails(shirt);
showProductDetails({ name: 'Tênis', price: 129.99, isAvailable: false });

// 2  PROPRIEDADE OPCIONAL EM INTERFACE

interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o e-mail: ${user.email}`);

  if (user.role) {
    console.log(`A função de usuário é: ${user.role}`);
  } else {
    console.log('A função de usuário é: comum');
  }
}

const u1: User = { email: 'fagner@email.com', role: 'Admin' };
const u2: User = { email: 'henrique@email.com' };

showUserDetails(u1);
showUserDetails(u2);

// 3 READONLY

interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: 'vw',
  wheels: 4,
};

console.log(fusca);
// fusca.wheels = 5   ... não consigo mudar uma propriedade com readonly

// 4 INDEX SIGNATURE

interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10,
};

coords.y = 15;

console.log(coords);

// coords.z = 'teste'

// 5 EXTENDING INTERFACES

interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpower: string[];
}

const fagner: Human = {
  name: 'Fagner',
  age: 28,
};

console.log(fagner);

const goku: SuperHuman = {
  name: 'Goku',
  age: 50,
  superpower: ['kamehameha', 'Genki Dama'],
};

console.log(goku);

console.log(goku.superpower[1]);

// 6 INTERSECTION TYPES

interface Charcter {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Charcter & Gun;

const faguins: HumanWithGun = {
  name: 'Fagnersro',
  type: 'shotgun',
  caliber: 12,
};

console.log(faguins);
console.log(faguins.caliber);

// 7 READEONLY ARRAY

let myArray: ReadonlyArray<string> = ['Maça', 'Laranja', 'Banana'];

// myArray[3] = 'Mamão' não me permite modificar o array diretamente

console.log(myArray);

myArray.forEach(item => {
  console.log('Fruta: ' + item);
});

myArray = myArray.map(item => {
  return `Fruta: ${item}`;
});

console.log(myArray);

// 8 TUPLAS

type fiveNumbers = [number, number, number, number, number];

// number[]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6];
// const mixedArray: fiveNumbers = [1, true, 'teste', 4, 5];

console.log(myNumberArray);

type nameAndAge = [string, number];

const anotherUser: nameAndAge = ['Fagner', 30];

console.log(anotherUser[0]);

anotherUser[0] = 'Henrique';

console.log(anotherUser[0]);

// anotherUser[1] = 'teste'

// 9  TUPLAS COM READONLY
function showNumbers(numbers: readonly [number, number]) {
  // numbers[0] = 10;
  console.log(numbers[0]);
  console.log(numbers[1]);
}

showNumbers([1, 2]);
