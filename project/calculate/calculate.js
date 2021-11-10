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

/* observer 적용해보기
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    console.log(mutation, mutation.type);
  });
});

const config = {
  attributes: true,
  childList: true,
  characterData: true,
  subtree: true || null,
  attributeOldValue: true || null,
  characterDataOldValue: true || null,
};

observer.observe(value, config);

observer.disconnect();
*/
// 1 & 2 (나중에 2번 분리하기)
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
  if (parseInt(numberOfStack.length / 3) === 1) {
    // 3, 4, 5자리
    numberOfStack.length > 3 &&
      numberOfStack.splice(numberOfStack.length % 3, 0, ",");
  } else {
    // 콤마 손보기
    // 6자리 수 일 때 ex) 123,456
    if (numberOfStack.length % 3 === 0) {
      numberOfStack.splice(3, 0, ",");
    } else {
      // 7, 8 자리
      if (numberOfStack.length === 7) {
        numberOfStack.splice(numberOfStack.length % 3, 0, ",");
        numberOfStack.splice((numberOfStack.length % 3) + 3, 0, ",");
      } else {
        numberOfStack.splice(numberOfStack.length % 3, 0, ",");
        numberOfStack.splice((numberOfStack.length % 3) + 6, 0, ",");
      }
    }
  }
  // 1자리 & 9자리 이상
};

const handleNumberButtonClick = (button, insertCommaCallbackFunction) => {
  // 숫자일 때 체크
  removeCommaOfValue();
  if (Object.values(button.classList).includes("number")) {
    // value 글자 수 체크
    if (value.innerText.length === 1 && numberOfStack.length === 0) {
      // 지금 첫글자 일 때 0이 아니면 숫자 전환 array + / 0이라면 continue
      parseInt(button.innerText) !== 0 && numberOfStack.push(button.innerText);
      value.innerText = button.innerText;
    } else {
      numberOfStack.length <= 14 && numberOfStack.push(button.innerText);
      insertCommaCallbackFunction();
      value.innerText = numberOfStack.join("");
    }
  }
};

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    handleNumberButtonClick(element, insertCommaCallbackFunction);
  });
});
