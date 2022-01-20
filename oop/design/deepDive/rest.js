// Rest
function foo(param, ...rest) {
    console.log(param); // 1
    console.log(rest); // [ 2, 3, 4, 5 ]
}
foo(1, 2, 3, 4, 5)

function bar(param1, param2, ...rest) {
    console.log(param1); // 1
    console.log(param2); // 2
    console.log(rest); // [ 3, 4, 5 ]
}
bar(1, 2, 3, 4, 5);

// arguments & length but 화살표함수에는 없다..

const arrow = (param1, parma2, ...rest) => {
    // console.log(arguments)
    // console.log(length)
    // console.log(name)
}

console.log(arrow.name)
console.log(arrow.length)
// console.log(arrow.arguments)

const plus = (x = 0, y = 1) => {
    return x + y
}


console.log(plus(5))