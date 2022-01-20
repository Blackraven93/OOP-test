// 기명 함수 표현식
var add = function add(a, b) {
    return a + b;
  };
  
  // 함수 표현식(또는 익명 함수)
  var add2 = function (a, b) {
    return a + b;
  };
  
  // 함수 선언문
  function add3(a, b) {
    return a + b;
  }
  
console.log(add3 === add3.prototype.constructor)
console.log(add3.constructor === add2.constructor);
console.log(add2.prototype.constructor === add2);
console.log(add2.constructor === Function);
console.log(add3.__proto__ === Function.prototype);
console.log(add3.prototype.constructor === Function)
  
  // name 프로퍼티
  function bird() {}
  var bird2 = function bird2() {};
  var bird3 = function () {}; // 함수 표현식의 대안 var bird = () => {}
  
  console.log(bird.name);
  console.log(bird2.name);
  console.log(bird3.name);
