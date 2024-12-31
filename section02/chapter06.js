// 1. 배열 순회
let arr = [1, 2, 3]

// 1.1 배열 인덱스
//.length -> 배열의 길이를 저장하는 프로퍼티(속성)
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]); // 1, 2, 3
}

let arr2 = [4, 5, 6, 7, 8]
// arr2.length는 5이므로 5번 반복
for (let i = 0; i < arr2.length; i++) {
  //   console.log(arr2[i]); // 4, 5, 6, 7, 8
}

// 1.2 for of 반복문
for (let item of arr) {
  //   console.log(item); // 1, 2, 3
}

// 2. 객체 순회
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
}

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person)

for (let key of keys) {
  const value = person[key]
  //   console.log(key, value); // name 이정환, age 27, hobby 테니스
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person)

for (let value of values) {
  //   console.log(value); // 이정환, 27, 테니스
}

// 2.3 for in
for (let key in person) {
  const value = person[key]
  console.log(key, value)
}
