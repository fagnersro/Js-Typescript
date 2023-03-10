"use strict";
// 1 EXEMPLO DECORATOR
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator() {
    console.log('Iniciando decorator!');
    return function (target, propertKey, descriptor) {
        console.log('Executando decorator');
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log('Terminando a execução do método');
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
console.log('----------------------');
// 2 MULTIPLOS DECORATORS
function a() {
    return function (target, propertKey, descriptor) {
        console.log('Executou A');
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        console.log('Executou B');
    };
}
function c() {
    return function (target, propertKey, descriptor) {
        console.log('Executou C');
    };
}
class MultipleDecorators {
    /*
    importante atentar sobre as ordens de chamada dos decorators,
    pois é iniciado primeiro o que está mais proximo do método dentro da
    classe, neste exemplo o decorator B é o mais próximo.
    */
    testing() {
        console.log('Terminando a execução');
    }
}
__decorate([
    c(),
    a(),
    b()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
// 3 CLASS DECORATOR
function classDec(constructor) {
    console.log(constructor.name);
    if (constructor.name === 'User') {
        console.log('Criando usuário');
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const fagner = new User('Fagner');
console.log(fagner);
// 4 METHOD DECORATOR
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `o nome da máquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(true)
], Machine.prototype, "showName", null);
const trator = new Machine('Trator');
console.log(trator.showName());
// 5 ACESSOR DECORATOR
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do mosntro: ${this.name}`;
    }
    get showAge() {
        return `Idade do mosntro: ${this.age}`;
    }
}
__decorate([
    enumerable(true) // utilizando o código da aula passada
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const charmander = new Monster('Charmander', 10);
console.log(charmander);
// 6 PROPERTY DECORATOR
// 00001
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, '0');
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID('1');
console.log(newItem);
console.log(newItem.id);
// 7 EXEMPLO REAL COM CLASS DECORATOR
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(12);
const newPen = new Pen(55);
console.log(newBook);
console.log(newPen);
console.log(newBook.createdAt);
// 8 EXEMPLO REAL METHOD DECORATOR
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        // console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log('Usuário já postou!');
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post('Meu primeiro post!', newPost.alreadyPosted);
newPost.post('Meu segundo post!', newPost.alreadyPosted);
newPost.post('Meu terceiro post!', newPost.alreadyPosted);
// 9 EXAMPLO REAL PROPERTY DECORATOR
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} digitos.`);
            }
            else {
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
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
let pedro = new Admin('fagnersasdasdasdqwe');
let lee = new Admin('Fagnersr');
console.log(lee);
