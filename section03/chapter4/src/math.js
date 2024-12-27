// math 모듈

//1. commonJS
// module.exports = {
//   add,
//   sub,
//   multiply,
// };

//2. es 모듈 시스템
// package.json에서 "type": "module" 설정 후 사용
// commonJS와 es 모듈 시스템을 혼용할 수 없다.
export function add(a, b) {
  return a + b
}

export function sub(a, b) {
  return a - b
}

// 디폴트로 내보내기 -> math 모듈의 기본값
export default function multiply(a, b) {
  return a * b
}
