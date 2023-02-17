// 1 GENERICS

function showData<T>(arg: T): string {
  return `O dado é: ${arg}`;
}

console.log(showData(5));
console.log(showData('testando generic'));
console.log(showData(true));
console.log(showData('teste'));

// 2 CONSTRAINT EM GENERIC

function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`;
}

const myObj = { name: 'Porta', cor: 'Branca' };
const otherProduct = { name: 'Carro', wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: 'Roupa' };

console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
// console.log(showProductName(thirdObj));

// 3 GENERICS COM INTERFACE

interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branco' };
const myPen: Pen = {
  name: 'Caneta BIC',
  wheels: false,
  engine: false,
  color: 'Azul',
};

console.log(myCar);
console.log(myPen);

// 4 TYPE PARAMETERS

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${[key]} está presente no objeto e tem o valor de ${
    obj[key]
  }`;
}

const server = {
  hd: '2TB',
  ram: '32GB',
};

console.log(getSomeKey(server, 'ram'));

// 5 KEYOF TYPE OPERATOR

type Character = { name: string; age: number; hasDriverLicense: boolean };

type C = keyof Character;

function showCharName(obj: Character, key: C): string {
  return `${obj[key]}`;
}

const myChar: Character = {
  name: 'Fagner',
  age: 30,
  hasDriverLicense: true,
};

console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
// console.log(showCharName('teste', 'asd'));

// 6 TYPEOF TYPE OPERATOR

const userName: string = 'Fagner';
const userName2: typeof userName = 'Henrique';

// const userName3: typeof userName = 10

type x = typeof userName;

const username4: x = 'Joaquim';

console.log(username4);

// 7 INDEXED ACCESS TYPE

type Truck = { km: number; kg: number; description: string };

type km = Truck['km'];

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: 'Caminhão para pouca carga',
};

function showKm(km: km) {
  console.log(`O veículo tem a km de ${km}`);
}

console.log(showKm(newTruck.km));

const newCar = {
  km: 5000,
  kg: 1000,
};

console.log(showKm(newCar.km));

// 8 CONDITIONAL TYPES

interface A {}

interface B extends A {}

interface Teste {
  showName(): string;
}

type myType = B extends A ? number : string;

const someVar: myType = 5;
// const someVar2:myType = 'teste'

type myTypeB = Teste extends { showNumber(): number } ? string : boolean;

// 9 TEMPLATE LITERALS TYPE

type testA = 'text';

type CustomType = `some ${testA}`;

const testing: CustomType = 'some text';
// const testing2: CustomType = 'some text 2';

type a1 = 'Testando';
type a2 = 'Union';

type a3 = `${a1}` | `${a2}`;
