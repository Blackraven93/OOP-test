# CalculateLv1

## 목적

- Module 시스템에 대한 이해
- DOM 핸들링
- 구현 능력 향상

## Implement

------------------

### Number

#### 변수 설정

1. totalCalculation : 전체식
2. currentNumber : 표시 숫자
3. previousNumber : 이전 표시 숫자
4. operator : 연산자

#### Number 파트 구현식

- [ ] 초기 숫자 표기
  - [ ] input innerText 값이 0일 때
    - [ ] 0일 때는 붙으면 안됨
    - [ ] 0에서 덧셈이 아닌 교체
- [ ] 연산자 Click 시 숫자 표기
- [ ] value가 0일 때
- [ ] 변수에 대한 자료구조 정의
- [ ] 한계치

------------------

### Operator

#### Operator 고려 조건

- [ ] 소수점 내림
- [ ] 무한대 처리
- [ ] 음수값 처리
- [ ] 연산식 처리
- [ ] 예외처리
  - [ ] 연산자 연속 Click
  - [ ] 한계처리 Message
    - 빼기 & 나누기 가능
    - 더하기 & 곱하기 불가능
  