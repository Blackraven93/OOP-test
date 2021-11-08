"use strict";
class Bird {
  constructor(name, color, fly) {
    this.name = name;
    this.color = [...color];
    this.fly = fly;
  }

  doFly = () => {
    this.text = "";
    this.fly
      ? (this.text = `${this.name}는 날수 있다.`)
      : (this.text = `${this.name}은 날수 없다.`);
    return this.text;
  };
}

const raven = new Bird("Raven", ["Black", "White"], true);
const kiwi = new Bird("Kiwi", ["Brown", "Green"], false);

console.clear();

console.time("test");

console.log(raven.doFly());
console.log(kiwi.doFly());

console.timeEnd("test");

class Raptor extends Bird {
  constructor(name, color, fly, eat) {
    super(name, color, fly);
    this.canEatMeet = eat;
  }
  doFly() {
    // 메소드 상속 시 화살표 함수 에러발생
    // 화살표 함수 this : Raptor
    // 선언식 this : undefined
    // console.log(this)
    return super.doFly();
  }
  doEatMeet() {
    this.text = "";
    this.canEatMeet
      ? (this.text = `${this.name}는 육식이다.`)
      : (this.text = `${this.name}은 초식이다.`);
    return this.text;
  }
}

const eagle = new Raptor("Eagle", ["Black", "White"], true, true);

console.time("test2");

console.log(eagle.doFly());
console.log(eagle.doEatMeet());

console.timeEnd("test2");

// 화살표 함수에는 this가 없음
// 화살표 함수에는 외부에서 this를 가져옴
// 함수 선언식은 동적으로 this를 할당
/**
 * 화살표 함수 특징
 * 1. this가 없음
 * 2. arguments 지원하지 않음
 * 3. new와 함께 호출할 수 없음
 * 4. super가 없음 <-------- 중요!
 */

// 상속의 방법은 instance와 instance 끼리 상속을 받거나
// class와 class 간 상속 가능하다.
