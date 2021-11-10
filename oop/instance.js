"use strict";
console.clear();
// instance 간 상속
// call, bind, apply
// call 은 실행 할 때 this값을 원하는 객체로 변화시켜 실행
// bind this의 값을 영구적으로 바꾸는 함수를 새로 만듬
const raven = {
  name: "raven",
  age: 29,
  job: "front-end developer",
};

const parrot = {
  name: "parrot",
  age: 22,
  job: "ML Ops",
};

function resume(prefix) {
  return `Hello my name is ${this.name} ${prefix}
i'm ${this.age} and major is ${this.job}`;
}

const ravenResume = resume.bind(raven, "=>");
console.log(ravenResume());
