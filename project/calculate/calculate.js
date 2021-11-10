class Calculate {
    constructor() {

    }
}

class Number {
    constructor() {

    }
}

class Value {
    constructor() {

    }
}

class Operation {
    constructor() {

    }
}

class Mapping {
    constructor() {

    }
}
console.log(parseInt(500 / 10))
// 어디에 무엇을 넣었을 때 어떻게 연산이 될까??

const value = document.getElementById('value');
const buttons = document.querySelectorAll('button');

let numberOfStack = [];

const addCommaToValue = () => {
    const validLength = value.innerText.length
    let valueArray = value.innerText.split('');
    if (4 <= validLength && validLength < 5) {
        valueArray.splice()
    }

}

const handleNumberButtonClick = (button) => {
    // 숫자일 때 체크
    if (Object.values(button.classList).includes('number')) {
        // value 글자 수 체크
        if (value.innerText.length === 1 && value.innerText === 0) {
            value.innerText = button.innerText
            button.innerText !== 0 && numberOfStack.push(button.innerText)
        } else {
            numberOfStack.push(button.innerText)
            value.innerText = numberOfStack.join('');
        }
    }
}


buttons.forEach((element) => {
    element.addEventListener('click', function () { handleNumberButtonClick(element) })
});

value.addEventListener('change', addCommaToValue);