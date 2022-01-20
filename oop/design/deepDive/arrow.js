class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }
    add(arr) {
        return arr.map(function (item) {
            
            return this.prefix + item; // ②
        });
    }
}
const prefixer = new Prefixer('-webkit-');
// console.log(prefixer.add(['transition', 'user-select'])); Error

// const counter = {
//     num: 1,
//     increase: () => ++this.num
//     };
// console.log(counter.increase()); // NaN

// const obj = {
//     print: () => this
// }

// obj.print()
