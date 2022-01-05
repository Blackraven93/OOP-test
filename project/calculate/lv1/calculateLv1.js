import log from "./libs/index.js"
import { handleStepOneNumber, handleStepTwoNumber } from "./number/index.js";
import { handleStepOneOperator, handleStepTwoOperator } from "./operator/index.js";
// value
const totalFomulaBox = document.querySelector(".totalFomula");

// keypad
const keyPad = document.querySelector(".keyPad");
const inputValue = document.getElementById("value")
// btns
const btns = keyPad.querySelectorAll("button");

// common variables
let totalCalculation = "";
let currentNumber = "";
let previousNumber = "";
let operator = "";


/**
 * 숫자 로직 짜기
 * 
 * @param {} value 
 * @returns
 */

const handleStepOne = (btn, input, currentNumber) => {
    const isNumber = btn.classList.contains("number");
    const isOperator = btn.classList.contains("yellow");

    if (isNumber) handleStepOneNumber(btn, input, currentNumber)
    else if (isOperator) handleStepTwoOperator(btn, input, currentNumber, previousNumber, operator, totalCalculation);
}

const handleStepTwo = (btn, input, currentNumber, previousNumber, operator, totalCalculation) => {
    const isNumber = btn.classList.contains("number");
    const isOperator = btn.classList.contains("yellow");

    if (isNumber) handleStepTwoNumber(btn, input, currentNumber)
    else if (isOperator) { }
}

/**
 * 
 * @function init 구현식
 * 
 * 1. totalCalculation : 전체식
 * 2. currentNumber : 표시 숫자
 * 3. previousNumber : 이전 표시 숫자
 * 4. operator : 연산자
 * 
 */

// 공통 로직
const init = (btn, input) => {
    // variables

    // totalCalculation
    // currentNumber
    // previousNumber
    // operator
    // totalFomulaBox <= 전체식
    // handleStepOne(btn, input, currentNumber);

    const isNumber = btn.classList.contains("number");
    const isOperator = btn.classList.contains("yellow");

    if (isNumber) {
        if (input.innerText === '0') {
            // 표시 값이 0이면 
            input.innerText = btn.innerText
            currentNumber = input.innerText
        } else {
            // 표시 값이 0이 아니면
            if (operator === "") {
                input.innerText += btn.innerText
                currentNumber = input.innerText
            } else {
                // 여기까지가 무슨상황??
                // current에 원하는 숫자가 채워져 있고
                // operator에 연산자가 있는 상황
                if (previousNumber === '') {
                    previousNumber = currentNumber
                    input.innerText = btn.innerText
                    currentNumber = input.innerText

                } else {
                    // 오퍼레이터도 있고 previous 넘버도 있고
                    // current에 붙이면 된다~
                    input.innerText += btn.innerText
                    currentNumber = input.innerText
                }
            }
        }
    } else if (isOperator) {
        // 첫단계에서는 오퍼레이터 처리 안해줘도 괜춘
        if (previousNumber === '') {
            // 첫단계
            if (btn.innerText === '=') {
                console.log("error 처리하기")
            } else {
                operator = btn.innerText
            }
        } else {
            console.log("prev값은 current + prev")
            if (operator === "=") {
                '= 로직 처리하기'
            }
        }
    }
}



const handleBtnClick = (event) => {
    event.preventDefault();
    // 팩킹해서 전달

    const {
        target: {
            classList: {
                value
            }
        }
    } = event
    const { target } = event
    return init(target, inputValue)
}

btns.forEach((btn) => btn.addEventListener("click", handleBtnClick))