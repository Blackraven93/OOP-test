// 상속
// 수퍼클래스
class Base {}
// 서브클래스
class Derived extends Base {}

// 아래식과 동일하다.

// 수퍼클래스
class Base1 {
constructor() {}
}
// 서브클래스
class Derived1 extends Base1 {
constructor(...args) { super(...args); }
}
const derived1 = new Derived1();
console.log(derived1); // Derived {}

// 수퍼클래스
class Base2 {
	constructor(a, b) { // ④
		this.a = a;
		this.b = b;
	}
}
// 서브클래스
class Derived2 extends Base2 {
// 재할당
	constructor(a, b, c) { // ②
		super(a, b); // ③
		this.c = c;
	}
}
const derived2 = new Derived2(1, 2, 3); // ①
console.log(derived2); // Derived {a: 1, b: 2, c: 3}

// class Base {}
// class Derived extends Base {
// 	constructor() {
// 		// ReferenceError: Must call super constructor in derived class before accessing 
// 		// 'this' or returning from derived constructor
// 		this.a = 1;
// 		super();
// 	}
// }

// const derived = new Derived(1);



