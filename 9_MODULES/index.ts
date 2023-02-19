// 1 IMPORTAÇÃO DE ARQUIVOS

import importGreet from './greet.js';

importGreet();

//2 IMPORT DE VARIAVEIS

import { x } from './variable';

console.log(x);

// 3 MULTIPLAS IMPORTAÇÕES

import { a, b, myFunction } from './multiple';

console.log(a);
console.log(b);

myFunction();

// 4 ALIAS

import { someName as name } from './changename'; // o ( as ) é o nosso ALIAS

console.log(name);

// 5 IMPORT ALL nescessario a utilização de um ALIAS para importar todos de um arquivo
import * as myNumbers from './numbers';

console.log(myNumbers);

const nx = myNumbers.n1;
console.log('O valor da variavél N1 em NX é: ', nx);

myNumbers.showNUmber();

// 6 IMPORTANDO TIPOS

import { Human } from './myType';

class User implements Human {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const fager = new User('Fagnersro', 28);
console.log(fager);
