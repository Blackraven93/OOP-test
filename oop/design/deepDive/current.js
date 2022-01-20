class Tea {
    constructor(name) {
        this.name = name;
        this.flavor = "rich"
        this.category = function(name) {
            return name === "홍차" ? "홍차" : "기타 차";
        }
    }

    // 프로토 타입 메서드
    get leaf() { return this.name }

    extract() {
        return `Brew ${this.name}`
    }
}

const tea = new Tea('백차')
console.log(tea.category('녹차'))
console.log(tea.category('홍차'))
console.log(tea.leaf)

console.log(tea)
console.log(Tea.prototype.extract)


// Constructor
class Person {
    constructor(name) {
        this.name = name;
        // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
        return {};
    }
}
   // constructor에서 명시적으로 반환한 빈 객체가 반환된다.
const me1 = new Person('Lee');
console.log(me1); // {}
   
// 이게 무슨말이지..?
   
class Person2 {
    constructor(name) {
        this.name = name;
        // 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.
        return 100;
    }
}
const me2 = new Person2('Lee');
console.log(me2); // Person { name: "Lee"}

// 정적 메소드 예시
// 표준 빌트인 객체의 정적 메서드
// Math.max(1, 2, 3); //  3
// Number.isNaN(NaN); // true
// JSON.stringify({ a: 1 }); // "{"a":1}"
// Object.is({}, {}); // false
// Reflect.has({ a: 1 }, 'a'); // true
// Array.from(...args)
