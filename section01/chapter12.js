// 1. 함수 표현식
function funcA() {
  //   console.log("funcA");
}

let varA = funcA
varA()

// 함수를 정의하면서 바로 변수에 할당
// 익명함수로 정의
let varB = function () {
  //   console.log("funcB");
}

varB()

// 2. 화살표 함수
// function 키워드를 생략하고 => 기호를 사용하여 함수를 정의
let varC = (value) => {
  console.log(value)
  return value + 1
}

// {} 생략 하는 경우
// let varC = (value) => value + 1

console.log(varC(10))
