// {
//     var foo = 'foo';
//     console.log(foo);
// }
// console.log(foo);
// function bar(){
//     var baz = 'baz';
//     console.log(baz);
//     console.log(foo);
// }
// bar();

// const year = 2021;
// const lastName = 'Kim';

// console.log(year - lastName);

// const number = 0;
// const isActive = false;
// console.log(number == isActive);

// const firstName = 'Jin';
// const lastName = 'Kim';
// console.log(`${firstName}-${lastName}`);

// const n = 15/3;
// console.log(n%5 === 0 && '5의 배수입니다.')

// const multiply2 = (num) => { return num * 2; };
// const multiply2 = num => { return num * 2; };
// const multiply2 = num => num * 2;
// console.log(multiply2(2));

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    sayHello(){
        console.log(`Hi! My name is ${this.fullName}`);
    }
}
const me = new Person('Jin','Kim');
me.sayHello();