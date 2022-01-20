// 이전 생성자 함수의 클래스 구성
function Coffee() {
    var that = {};
    that.tastes = "yummy";
    return that;
  }
  
  function Coffee2() {
    return {
      tastes: "yummy",
    };
  }
  
  function Coffee3() {
    this.tastes = "yummy";
  }
  
  Coffee.prototype.greenBean = "Brazil Santos";
  Coffee2.prototype.greenBean = "Brazil Santos";
  Coffee3.prototype.greenBean = "Brazil Santos";
  
  // 문제는 프로토타입과 연결고리!
  var first = new Coffee(),
    second = Coffee2(),
    third = new Coffee3();

console.log(first);
console.log(second);
console.log(third);


// 인스턴스는 모두 가지고 있음
console.log(first.tastes);
console.log(second.tastes);
console.log(third.tastes);

// 연결점이 다르다..
console.log(first.__proto__);
console.log(second.__proto__);
console.log(third.__proto__);

console.log(first.greenBean); 
console.log(second.greenBean); 
console.log(third.greenBean); 


console.log(third.constructor === Coffee3)
console.log(third.__proto__ === Coffee3.prototype)
console.log(third.__proto__.constructor === Coffee3 )
