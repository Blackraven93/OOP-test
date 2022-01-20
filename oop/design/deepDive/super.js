// 수퍼클래스
class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	getArea() {
		return this.width * this.height;
	}

	toString() {
		return `width = ${this.width}, height = ${this.height}`;
	}
}

// 서브클래스
class ColorRectangle extends Rectangle {
	constructor(width, height, color) {
		super(width, height);
		this.color = color;
	}

	// 메서드 오버라이딩
	toString() {
		return super.toString() + `, color = ${this.color}`;
	}
}

const colorRectangle = new ColorRectangle(2, 4, 'red');
console.log(colorRectangle); // ColorRectangle {width: 2, height: 4, color: "red"}
// 상속을 통해 getArea 메서드를 호출
console.log(colorRectangle.getArea()); // 8
// 오버라이딩된 toString 메서드를 호출
console.log(colorRectangle.toString()); // width = 2, height = 4, color = red

class Extends {
    constructor() {
        this.extend = '상속을 연습중입니다.'
    }
}

class Child extends Extends {
    constructor() {
        super()
        return this
    }

    print() {
        return this
    }
}

let child = new Child()
console.log(child.extend) // 상속을 연습 중입니다.
console.log(child.print())
console.log(child.__proto__) // object null이 아님
// let child2 =  new Extends.Child() 이렇게 사용됨
// 즉 super()를 해줌과 동시에 this는 상속을 받는 class의 this로 바인딩 됨

console.log(Child.__proto__)