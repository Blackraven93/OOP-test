console.clear();
// instance 간 상속
// call, bind, apply

const raven = {
  name: "raven",
  age: 29,
  job: "front-end developer",
};

const parrot = {
  name: "parrot",
  age: 22,
  job: "ML Ops",
};

function resume(prefix) {
  return `Hello my name is ${this.name} ${prefix}
i'm ${this.age} and major is ${this.job}`;
}

const ravenResume = resume.bind(raven, "=>");
console.log(ravenResume());
