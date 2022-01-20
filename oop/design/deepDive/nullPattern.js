// Pattern
// 자바스크립트에서 유용하게 사용하는 패턴 null object pattern
class User {
    constructor(id, name) {
        this.id = id
        this.name = name
    }


    hasAccess() {
        return this.name === 'Raven'
    }
}

const users = [
    new User(1, 'Bob'),
    new User(2, 'Raven')
]

const getUser = id => users.find(user => user.id === id);

const printUser = id => {
    const user = getUser(id)

    let name = "Guest"
    if (user !== undefined && user.name !== undefined) name = user.name
    // 이름이 있으면 인사말에 이름을 넣어주기
    console.log(`Hello ${name}`)

    if (user !== undefined && user.hasAccess !== undefined && user.hasAccess()) {
        // 유저 배열에 같은 id가 있는지 확인
        // 그리고 이름이 있는지 확인
        // 마지막으로 그사람의 이름이 Raven인지 확인
        console.log("You have access");
    } else {
        // 하나라도 없으면 엑세스 접근 권한 없음
        console.log("You are not allowed here");
    }

} 

console.log("Users")
console.log(getUser(0))
console.log(getUser(1))
console.log(getUser(2))

console.log("\nLogin")

console.log("id = 0")
console.log(printUser(0) + "\n")
console.log("id = 1")
console.log(printUser(1) + "\n")
console.log("id = 2")
console.log(printUser(2) + "\n")


// class User {
//     constructor(id, name) {
//         this.id = id
//         this.name = name
//     }

//     hasAccess() {
//         return this.name === "Raven"
//     }
// }


// class NullUser {
//     constructor() {
//         this.id = -1
//         this.name = "Guest"
//     }


//     hasAccess() {
//         return false
//     }
// }

// const users = [
//     new User(1, 'Bob'),
//     new User(2, 'Raven')
// ]

// const getUser = id => {
//     const user = users.find(user => user.id === id);
//     if (user === undefined || null) return new NullUser()
//     else return user
// }

// const printUser = id => {
//     const user = getUser(id)
//     console.log(`Hello ${user.name}`)

//     if (user.hasAccess()) {
//         return "You have access"
//     } else {
//         return "You are not allowed here"
//     }

// }

// console.log("Users")
// console.log(getUser(0))
// console.log(getUser(1))
// console.log(getUser(2))

// console.log("\nLogin")

// console.log("id = 0")
// console.log(printUser(0) + "\n")
// console.log("id = 1")
// console.log(printUser(1) + "\n")
// console.log("id = 2")
// console.log(printUser(2) + "\n")