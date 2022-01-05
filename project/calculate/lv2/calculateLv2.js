"use strict";

class Calculate {
  constructor() {}
}

class Number {
  constructor() {}
}

class Value {
  constructor() {}
}

class Operation {
  constructor() {}
}

class Mapping {
  constructor() {}
}
// 어디에 무엇을 넣었을 때 어떻게 연산이 될까??

const value = document.getElementById("value");
const buttons = document.querySelectorAll("button");
const acBtn = document.querySelector(".ac");

let numberOfStack = [];

const removeCommaOfValue = () => {
  if (numberOfStack.includes(",")) {
    numberOfStack.splice(numberOfStack.indexOf(","), 1);
    console.log(numberOfStack);
    return removeCommaOfValue();
  }
};

// 3
const insertCommaCallbackFunction = () => {
  // 정규표현식을 사용하면 편리하다.
  return numberOfStack.join("").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const handleNumberButtonClick = (button, insertCommaCallbackFunction) => {
  // 자리수에 붙는 콤마 제거 함수
  removeCommaOfValue();

  // 숫자일 때 연산
  if (Object.values(button.classList).includes("number")) {
    // value 글자 수 체크
    if (value.innerText.length === 1 && numberOfStack.length === 0) {
      // 지금 첫글자 일 때 0이 아니면 숫자 전환 array + / 0이라면 continue
      parseInt(button.innerText) !== 0 && numberOfStack.push(button.innerText);
      value.innerText = button.innerText;
      parseInt(value.innerText) !== 0 && (acBtn.innerText = "C");
    } else {
      // 숫자 제한 범위 체크
      numberOfStack.length <= 14 && numberOfStack.push(button.innerText);
      value.innerText = insertCommaCallbackFunction();
    }
  } else if (Object.values(button.classList).includes("mapping")) {
    if (button.classList.contains("ac")) {
      // 초기화
      numberOfStack = [];
      value.innerText = 0;
      acBtn.innerText = "AC";
    } else if (button.classList.contains("plusOrMinus")) {
      // 부호변경
      numberOfStack[0] === "-"
        ? numberOfStack.shift()
        : numberOfStack.unshift("-");
      value.innerText = insertCommaCallbackFunction();
    } else if (button.classList.contains("percent")) {
      // 퍼센트 변경
      numberOfStack = String(parseInt(numberOfStack.join("")) / 100).split("");
      value.innerText = insertCommaCallbackFunction();
    } else if (button.classList.contains("comma")) {
      if (value.innerText !== "0") {
        numberOfStack.splice(numberOfStack.length, 0, ".");
        value.innerText = insertCommaCallbackFunction();
      } else {
        numberOfStack.push("0");
        numberOfStack.push(".");

        value.innerText = insertCommaCallbackFunction();
      }
    }
  }
};

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    handleNumberButtonClick(element, insertCommaCallbackFunction);
  });
});
