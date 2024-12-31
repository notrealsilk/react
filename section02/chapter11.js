// 자바스크립트는 웹 api를 사용할 수 있어서 비동기 함수를 사용할 수 있다.

console.log(1)

// setTimeout 함수는 비동기 함수로서, 지정된 시간이 지나면 콜백 함수를 실행한다.
// setTimeout(콜백 함수, 콜백 함수 실행할 시간)
setTimeout(() => {
  console.log(2)
}, 3000)

console.log(3)

// 1 3 2
