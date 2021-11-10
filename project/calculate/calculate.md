# Calculate(계산기)
  - class를 연습하기 위해 아이폰 계산기 작동을 재현해보자.

## Class 분류
### Number(숫자)
  - keypad number btn
    - 구체화
      1. [x] 버튼을 눌렀을 때 button value를 input 창에 표시
      2. [x] 0일 때는 추가 X
      3. [ ] 연산이 종료 되는 시점 숫자 크기 체크 후 쉼표 표시
      4. [x] 숫자가 14자리 이상일 때 숫자 입력 불가(연산만 가능)
      5. [ ] 숫자가 길어질 때 숫자 크기 줄어듬
      6. [ ] 숫자가 14자리보다 커진 연산은 e 단위로 변경 (가장 마지막에 할 것)
### Value(값)
  - input value handle
### Operation(연산자)
  - +, -, *, /, =
### Mapping
  - ac, +/-, %, .


- callback 함수에 인자를 넣을 때 익명함수를 사용
  - 하지만.. 이게 좋은 코드인가??
    ``` buttons.forEach((element) => {
          element.addEventListener("click", () => {
            handleNumberButtonClick(element, addCommaToValue);
          });
        });
    ```