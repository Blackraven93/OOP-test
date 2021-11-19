# Calculate(계산기)
  - class를 연습하기 위해 아이폰 계산기 작동을 재현해보자.

## Class 분류
### Number(숫자)
  - keypad number btn
    - detail(구체화)
      1. [x] ~~버튼을 눌렀을 때 button value를 input 창에 표시~~
      2. [x] ~~0일 때는 추가 X~~
      3. [x] ~~연산이 종료 되는 시점 숫자 크기 체크 후 쉼표 표시~~
      4. [x] ~~숫자가 14자리 이상일 때 숫자 입력 불가(연산만 가능)~~
      5. [ ] 숫자가 길어질 때 숫자 크기 줄어듬
      6. [ ] 숫자가 14자리보다 커진 연산은 e 단위로 변경 (가장 마지막에 할 것)
### Value(값)
  - input value handle
### Operation(연산자)
  - +, -, *, /, =
### Mapping
  - ac, +/-, %, .
    - keypad mapping btn
      - detail(구체화)
        1. [x] ~~ac button (초기화)~~
          - [x] ~~AC -> C 글자 변환~~
        2. [x] ~~+/- plusOrMinus (부호 맵핑)~~
          - [ ] Operation 배열 따로 만들어 줘서 나중에 맵핑하기
        3. [ ] % percent (퍼센트 맵핑)
          - [ ] 맵핑 후 숫자 입력 불가
          - [ ] round 누르고 퍼센트 누르고 숫자를 누를 때 0 앞에 있음
        4. [ ] . (round) 처리 (소수점 맵핑)
          - [ ] +/- 부호 변환시 콤마
          - [ ] round 자체 숫자 변화시 콤마
          - [ ] input value가 0일 때 콤마 처리


- callback 함수에 인자를 넣을 때 익명함수를 사용
  - 하지만.. 이게 좋은 코드인가??
    ```javascript
    buttons.forEach((element) => {
          element.addEventListener("click", () => {
            handleNumberButtonClick(element, addCommaToValue);
          });
        });
    ```

- 함수가 많아짐과 동시에 절차식으로 선언할 때 함수의 의존 관계를 설명하지 못함;;

- 정규 표현식 체크
  ```javascript
  numberOfStack.join("").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  ```