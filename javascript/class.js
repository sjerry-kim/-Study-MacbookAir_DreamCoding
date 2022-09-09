'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// -introduced in ES6
// -syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person{
    //constructor
    constructor(name,age){
        //fields
        this.name=name;
        this.age=age;
    }

    //method
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. Getter and Setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        //if (value<0){
        //    throw Error('age can not be negative');
        //}
        this._age=value<0? 0: value;
    }
}

const user1 = new User('Steve', 'job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// 
class Experiment{
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// too soon!
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher); -> undefined
console.log(Article.publisher);
Article.printPublisher(); // class로만 접근 가능하다...객체로 접근 불가능...

// 5. Inheritance
// a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width=width;
        this.height=height;
        this.color=color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw(); // super를 이용하여 부모의 함수를 호출할 수 있음
        console.log('🔺') // overiding
    }

    getArea(){
        return (this.width*this.height)/2; // overiding
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw(); // super로 호출된 부모의 함수와, overiding 된 함수를 차례로 호출함
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);