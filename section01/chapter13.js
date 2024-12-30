// 1. 콜백함수
function main(value) {
  value()
}

// 콜백 함수를 단축해서 사용
main(() => {
  //   console.log("i am sub");
})

// 2. 콜백함수의 활용
// 구조가 흡사한 함수가 있을 경우, 콜백함수를 사용하여 중복을 줄일 수 있다.
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx)
  }
}

repeat(5, (idx) => {
  console.log(idx)
})

repeat(5, (idx) => {
  console.log(idx * 2)
})

repeat(5, (idx) => {
  console.log(idx * 3)
})
