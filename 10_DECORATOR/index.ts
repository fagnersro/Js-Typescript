// 1 EXEMPLO DECORATOR

function myDecorator() {
  console.log('Iniciando decorator!');

  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Executando decorator');
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);
  };
}

class myClass {
  @myDecorator()
  testing() {
    console.log('Terminando a execução do método');
  }
}

const myObj = new myClass();

myObj.testing();

console.log('----------------------');

// 2 MULTIPLOS DECORATORS

function a() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Executou A');
  };
}

function b() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Executou B');
  };
}

function c() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Executou C');
  };
}

class MultipleDecorators {
  /* 
  importante atentar sobre as ordens de chamada dos decorators, 
  pois é iniciado primeiro o que está mais proximo do método dentro da 
  classe, neste exemplo o decorator B é o mais próximo.
  */
  @c()
  @a()
  @b()
  testing() {
    console.log('Terminando a execução');
  }
}

const multiple = new MultipleDecorators();

multiple.testing();

// 3 CLASS DECORATOR

function classDec(constructor: Function) {
  console.log(constructor.name);
  if (constructor.name === 'User') {
    console.log('Criando usuário');
  }
}
@classDec
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const fagner = new User('Fagner');
console.log(fagner);

// 4 METHOD DECORATOR

function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }

  @enumerable(true)
  showName() {
    console.log(this);
    return `o nome da máquina é: ${this.name}`;
  }
}

const trator = new Machine('Trator');

console.log(trator.showName());

// 5 ACESSOR DECORATOR

class Monster {
  name?;
  age?;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerable(true) // utilizando o código da aula passada
  get showName() {
    return `Nome do mosntro: ${this.name}`;
  }
  @enumerable(false)
  get showAge() {
    return `Idade do mosntro: ${this.age}`;
  }
}

const charmander = new Monster('Charmander', 10);
console.log(charmander);

// 6 PROPERTY DECORATOR
// 00001

function formatNumber() {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      value = newVal.padStart(5, '0');
    };

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

class ID {
  @formatNumber()
  id;

  constructor(id: string) {
    this.id = id;
  }
}

const newItem = new ID('1');

console.log(newItem);

console.log(newItem.id);

// 7 EXEMPLO REAL COM CLASS DECORATOR

function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}

@createdDate
class Book {
  id;
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

@createdDate
class Pen {
  id;
  createdAt?: Date; // é nescessário declarar item criado pelo decorator para ter acesso em um console por exemplo
  constructor(id: number) {
    this.id = id;
  }
}

const newBook = new Book(12);
const newPen = new Pen(55);

console.log(newBook);
console.log(newPen);

console.log(newBook.createdAt);

// 8 EXEMPLO REAL METHOD DECORATOR
function checkIfUserPosted() {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    // console.log(childFunction);
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log('Usuário já postou!');
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    };

    return descriptor;
  };
}

class Post {
  alreadyPosted = false;

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Post do usuário: ${content}`);
  }
}

const newPost = new Post();

newPost.post('Meu primeiro post!', newPost.alreadyPosted);
newPost.post('Meu segundo post!', newPost.alreadyPosted);

newPost.post('Meu terceiro post!', newPost.alreadyPosted);

// 9 EXAMPLO REAL PROPERTY DECORATOR

function Max(limit: number) {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      if (newVal.length > limit) {
        console.log(`O valor deve ter no máximo ${limit} digitos.`);
      } else {
        value = newVal;
      }
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}

class Admin {
  @Max(10)
  username;

  constructor(username: string) {
    this.username = username;
  }
}

let pedro = new Admin('fagnersasdasdasdqwe');

let lee = new Admin('Fagnersr');

console.log(lee);
