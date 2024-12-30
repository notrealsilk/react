// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는것

let num = 10
let str = "20"

// 정수 num이 계산 과정에서 문자열로 변환-> 문자열 + 문자열 연결
const result = num + str //1020

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10"
let strToNum1 = Number(str1)

let str2 = "10개"
let strToNum2 = parseInt(str2) // 숫자값이 아닌 값이 있을 때 형변환해주는 내장함수

// -> 숫자 -> 문자열
let num1 = 20
let numToStr1 = String(num1)

console.log(numToStr1 + "입니다") // 20입니다
