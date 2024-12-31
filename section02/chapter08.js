// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
// 콜백함수랑 같이 사용
let arr1 = [1, 2, 3]

// 현제 요소, 현재 인덱스, 배열 전체
arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2); // 0 2 , 1 4, 2 6
})

let doubledArr = []

arr1.forEach((item) => {
  doubledArr.push(item * 2) // [2, 4, 6]
})

// 2. includes
// 값이 존재하는 지 찾는 메서드
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3]
let isInclude = arr2.includes(10) // false

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드 (얕은 비교)
// 객체 타입의 값이 저장된 배열은 요소의 인덱스를 찾을 수 없다.
let arr3 = [2, 2, 2]
let index = arr3.indexOf(2) // 0 (값이 중복되면 가장 빠른 인덱스를 출력)
let index = arr3.indexOf(20) // -1 (값이 없으면 -1)

// let objectArr = [
//   { name: "이정환" },
//   { name: "홍길동" },
// ];

// console.log(
//   objectArr.indexOf({ name: "이정환" })
// );

// console.log(
//   objectArr.findIndex(
//     (item) => item.name === "이정환"
//   )
// );

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런 (깊은 비교)
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3]
const findedIndex = arr4.findIndex((item) => item === 999)
const findedIndex2 = arr4.findIndex((item) => item % 2 === 0)

console.log(findedIndex) // -1 (조건에 만족하는 요소가 없으면 -1)
console.log(findedIndex2) // 1

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "이정환" }, { name: "홍길동" }]

const finded = arr5.find((item) => item.name === "이정환")

console.log(finded) // { name: "이정환" }
