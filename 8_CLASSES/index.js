"use strict";
// 1 CAMPOS EM CLASSES
class User {
}
const fagner = new User();
fagner.name = 'Fagner';
fagner.age = 28;
// fagner.job = 'Programmer' não é possivél iniciar com propriedades que não existe na classe
console.log(fagner);
// 2 CONSTRUCTOR
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const henrique = new NewUser('Fagner', 28);
// const goncalves = new NewUser(28, 28); com constructor é preciso atender os requesitos de propriedades da classe
console.log(henrique);
// 3 CAMPO READONLY
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const vw = new Car('Jetta');
console.log(vw);
console.log(vw.wheels);
vw.name = 'Jetta Turbo';
// vw.wheels = 5 não é posivel alterar o valor de uma propriedade readonly
// 4 HERANÇA E SUPER
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine('Trator');
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine('Destroyer', 4);
console.log(trator);
console.log(destroyer);
// 5 MÉTODOS
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log('Hey Stranger!');
    }
}
const jimmy = new Dwarf('Jimmy');
console.log(jimmy.name);
jimmy.greeting();
console.log(jimmy);
// 6 THIS
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck('Volvo', 400);
const scania = new Truck('Scania', 400);
volvo.showDetails();
scania.showDetails();
// 7 GETTERS
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + ' ' + this.surname;
    }
}
const fagnerHenrique = new Person('Fagner', 'Henrique');
console.log(fagnerHenrique.name);
console.log(fagnerHenrique.fullName);
// 8 SETTER
class Coords {
    set fillx(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log('X inserido com sucesso');
    }
    set filly(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log('Y inserido com sucesso');
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillx = 15;
myCoords.filly = 14;
console.log(myCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do post é: ${this.title}`;
    }
}
const myPost = new blogPost('Hello Word');
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo é: ${this.title}`;
    }
}
const myPost2 = new TestingInterface('Hello new Word');
console.log(myPost2);
// 10 OVERRIDE DE MÉTODOS
class Base {
    someMethod() {
        console.log('alguma coisa');
    }
    showName() { }
}
class Nova extends Base {
    someMethod() {
        console.log('Testando outra coisa');
    }
}
const myObject = new Nova();
myObject.someMethod();
// 11 - PUBLIC
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
// 12  PROTECTED
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log('Este método é protegido');
    }
}
class F extends E {
    showX() {
        console.log('X: ' + this.x);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
// 13 PRIVATE
class PrivateClass {
    constructor() {
        this.name = ' Private';
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log('Método privado');
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
// console.log(pObj.name)
console.log(pObj.showName());
// console.log(pObj.privateMethod())
pObj.showPrivateMethod();
// class TestingPrivate extends PrivateClass {
//   myMethod() {
//     this.privateMethod();
//   }
// }
//14 STATIC MEMBERS
class StaticMembers {
    static staticMethod() {
        console.log('Este é um método estático');
    }
}
StaticMembers.prop = 'Teste static';
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 GENERIC CLASS
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
}
const newItem = new Item('caixa', 'surpresa');
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
const secondItem = new Item(12, true);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);
// 16 PARAMETER PROPERTIES
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qtd total: ${this.qty}`;
    }
    get showPrice() {
        return `Valor total: ${this.price}`;
    }
}
const newShirt = new ParameterProperties('Camis', 5, 19.99);
console.log(newShirt.name);
// console.log((newShirt.price)) não é possivél acessar propriedades privadas
console.log(newShirt.showPrice);
console.log(newShirt.showQty);
// 17 CLASS EXPRESSIONS
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass('Fagner');
console.log(pessoa);
console.log(pessoa.name);
// 18 ABSTRACT CLASS
class AbstractClass {
}
// const newObj = new AbstractClass();
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é: ${this.name}`);
    }
}
const newAbstractObject = new AbstractExample('fagnersro');
newAbstractObject.showName();
// 19 RELAÇÕES ENTRE CLASSES
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
