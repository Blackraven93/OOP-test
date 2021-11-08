"use strict";

// prototype vs __proto__

function Bird(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Bird.prototype.fly = function () {
  return `${this.name}은 날 수 있습니다.`;
};

const raven = new Bird("Raven", 10, 20);
const parrot = new Bird("Parrot", 30, 40);

// Bird의 생성자 함수 내부에 prototype

// 상속

function Raptor(name, first, second, eat) {
  // 객체의 property 상속
  Bird.call(this, name, first, second);
  this.eat = eat;
}

// method의 상속 __proto__를 이용한 방법
// Raptor.prototype.__proto__ = Bird.prototype;

// 새로운 Object를 만들어 준다.

Raptor.prototype = Object.create(Bird.prototype);
Raptor.prototype.constructor = Raptor;

Raptor.prototype.checkEatMeet = function () {
  return `${this.eat}동물 입니다.`;
}; // 위치에 따라 초기화 된다.

const eagle = new Raptor("Eagle", 10, 50, "육식");

console.clear();
console.log(eagle);
console.log(eagle.checkEatMeet());
console.log(eagle.fly());
console.log(eagle.constructor);

// constructor정의
// prototype과 constructor 모두 정의해야 한다.
