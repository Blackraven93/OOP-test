import log from "./libs/index.js"

// value
const totalFomulaBox = document.querySelector(".totalFomula");

// keypad
const keyPad = document.querySelector(".keyPad");
const inputValue = document.getElementById("value")
// btns
const btns = keyPad.querySelectorAll("button");


/**
 * 숫자 로직 짜기
 * 
 * @param {} value 
 * @returns
 */
const handleNumber = (value) => {
    log(value)
}

/**
 * 연산자 로직 짜기
 * 
 * @param {*} value 
 * @returns
 */
const handleOperator = (value) => {
    log(value)
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
const init = (btns, input) => {
    let totalCalculation = "";
    let currentNumber = "";
    let previousNumber = "";
    let operator = "";
    // totalFomulaBox




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