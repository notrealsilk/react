// 모듈

// 유지보수, 디버깅 등의 유용성을 위해 각 기능 별로 나눠진 js파일들

//////////////////////////////////

// 1. commonjs 모듈 시스템

//require()함수를 쓰면 ()안의 경로에서 선언한 함수를 불어올 수 ㅇ
const math = require("./math.js")
// const { add, sub } = require("./math.js"); // 구조분해 할당

console.log(math.add(1, 2)) // 3
console.log(math.sub(1, 2)) // -1

//2. es 모듈 시스템
// es 모듈 시스템을 사용하려면 package.json에서 "type": "module" 설정 후 사용해야 한다.
// 확장자인 .js는 생략 불가
// mul -> 디폴트로 내보내기 되어 있으므로 중괄호 없이 사용
import mul, { add, sub } from "./math.js"

console.log(add(1, 2))
console.log(sub(1, 2))
console.log(mul(2, 3))
