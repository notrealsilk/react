function add10(num) {
  // resolve: 성공을 전달하는 함수
  // reject: 실패를 전달하는 함수
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      // num이 숫자가 맞으면 resolve를 호출
      if (typeof num === "number") {
        resolve(num + 10)
        // num이 숫자가 아니면 reject를 호출
      } else {
        reject("num이 숫자가 아닙니다")
      }
    }, 2000)
  })

  return promise
}

// then, catch (promise chaining)

// then은 resolve가 호출되면 실행 / promise 객체를 그대로 반환
// catch는 reject가 호출되면 실행
add10(0)
  .then((result) => {
    console.log(result)
    return add10(result) // 콜백 지옥을 방지하기 위해 promise 객체를 반환
  })
  // 위에 있는 then에서 반환된 promise 객체를 받아서 실행
  .then((result) => {
    console.log(result)
    return add10(undefined)
  })
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })
