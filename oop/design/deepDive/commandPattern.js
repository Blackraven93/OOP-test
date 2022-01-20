// class Calculator {
//     constructor() {
//         this.value = 0
//     }

//     add(valueToAdd) {
//         this.value += valueToAdd
//     }

//     subtract(valueToSubTract) {
//         this.value -= valueToSubTract
//     }

//     multiply(valueToMultiply) {
//         this.value *= valueToMultiply
//     }

//     divide(valueToDivide) {
//         this.value /= valueToDivide
//     }
// }

// const calculator = new Calculator()
// calculator.add(10)
// console.log(calculator.value)
// calculator.divide(2)
// console.log(calculator.value)





// class Calculator {
//     constructor() {
//         this.value = 0
//         this.history = []
//     }

//     executeCommand(command) {
//         this.value = command.execute(this.value)
//         this.history.push(command)
//     }

//     undo() {
//         const command = this.history.pop()
//         this.value = command.undo(this.value)
//     }

//     subtract(valueToSubTract) {
//         this.value -= valueToSubTract
//     }

//     multiply(valueToMultiply) {
//         this.value *= valueToMultiply
//     }

//     divide(valueToDivide) {
//         this.value /= valueToDivide
//     }

// }

// class AddCommand {
//     constructor(valueToAdd) {
//         this.valueToAdd = valueToAdd
//     }

//     execute(currentValue) {
//         return currentValue + this.valueToAdd
//     }

//     undo(currentValue) {
//         return currentValue - this.valueToAdd
//     }
// }
// class SubtractCommand {
//     constructor(valueToSubTract) {
//         this.valueToSubTract = valueToSubTract
//     }

//     execute(currentValue) {
//         return currentValue - this.valueToSubTract
//     }

//     undo(currentValue) {
//         return currentValue + this.valueToSubTract
//     }
// }

// class MultiplyCommand {
//     constructor(valueToMultiply) {
//         this.valueToMultiply = valueToMultiply
//     }

//     execute(currentValue) {
//         return currentValue * this.valueToMultiply
//     }

//     undo(currentValue) {
//         return currentValue / this.valueToMultiply
//     }
// }
// class DivideCommand {
//     constructor(valueToDivide) {
//         this.valueToDivide = valueToDivide
//     }

//     execute(currentValue) {
//         return currentValue / this.valueToDivide
//     }

//     undo(currentValue) {
//         return currentValue * this.valueToDivide
//     }
// }

// class AddThenMultiplyCommand {
//     constructor(valueToAdd, valueToMultiply) {
//         this.addCommand = new AddCommand(valueToAdd);
//         this.multiplyCommand = new MultiplyCommand(valueToMultiply)
//     }

//     execute(currentValue) {
//         const newValue = this.addCommand.execute(currentValue)
//         return this.multiplyCommand.execute(newValue)
//     }

//     undo(currentValue) {
//         const newValue = this.multiplyCommand.undo(currentValue)
//         return this.addCommand.execute(newValue)

//     }
// }

// const calculator = new Calculator()
// calculator.executeCommand(new AddCommand(10))
// calculator.executeCommand(new MultiplyCommand(5))
// console.log(calculator.value)

// // undo and command
// calculator.undo()
// calculator.undo()
// console.log(calculator.value)

// calculator.executeCommand(new AddCommand(10))
// calculator.executeCommand(new DivideCommand(2))
// console.log(calculator.value)

// // double command combine
// calculator.executeCommand(new AddThenMultiplyCommand(10, 2))
// console.log(calculator.value)


export default class Calculate {
    constructor(list) {
      this.contextList = list;
      this.totalContect = [];
    }
  
    get getList() {
      return this.contextList;
    }
  
    get empty() {
      return this.contextList.length === 0 && Array.isArray(this.contextList) ? true : false;
    }
  
    _push(value) {
      // push 로직만 넣어 놓을 것
      this.contextList[this.contextList.length] = value;
      return this.contextList;
    }
  
    _pop(count = 1) {
      const newList = [...this.contextList];
      const popedList = [];
      for (let i = 0; i < newList.length - count; i++) {
        popedList[i] = newList[i];
      }
  
      this.contextList = popedList;
  
      return this.contextList;
    }
  
    _clear() {
      return (this.contextList = []);
    }
}

  export default class Operator extends Calculate {
    constructor(operatorList) {
      super(operatorList);
      this.operator = operatorList[1];
    }
  
    calculate() {
      const [num1, num2] = [
        Number(this.contextList[0]),
        Number(this.contextList[2]),
      ];
      
      switch (this.operator) {
        case "+":
          return this.plus(num1, num2);
        case "-":
          if ((num1 - num2) < 0 ) return new Error("뺄셈 결과 음수값 입니다. ");
          return this.subtract(num1, num2);
        case "x":
          return this.multiply(num1, num2);
        case "÷":
          if (num2 !== 0) return Math.floor(this.divide(num1, num2));
          return new Error("0으로 나눌 수 없습니다.")
        case "=":
          return this.equal();
        default:
          return "Done";
      }
    }
  
    plus(num1, num2) {
      return num1 + num2;
    }
  
    subtract(num1, num2) {
      return num1 - num2;
    }
  
    multiply(num1, num2) {
      return num1 * num2;
    }
  
    divide(num1, num2) {
      return num1 / num2;
    }
  
    equal() {
      return num1 === undefined || num2 === undefined ? this.calculate() : new Error("정확한 값을 전달해주세요")
    }
  }