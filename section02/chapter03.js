// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3]

let [one, two, three, four = 4] = arr
console.log(one, two, three, four) // 1 2 3 4

let [one, two, three, four] = arr
console.log(one, two, three, four) // 1 2 3 undefined

let [one, two] = arr
console.log(one, two) // 1 2

// 2. 객체의 구조 분해 할당
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
}

let { age: myAge, hobby, name, extra = "hello" } = person // age를 myAge로 바꿔서 받음
console.log(myAge, hobby, name, extra) // 27 테니스 이정환 hello

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra) // 이정환 27 테니스 hello
}

func(person) // 객체를 넘겨줬을 때만 구조분해 할당 가능
