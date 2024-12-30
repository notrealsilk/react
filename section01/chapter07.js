// 1. 대입 연산자
let var1 = 1

// 2. 산술 연산자
let num1 = 3 + 2
let num2 = 3 - 2
let num3 = 3 * 2
let num4 = 3 / 2
let num5 = 3 % 2

let num6 = (1 + 2) * 10

// 3. 복합 대입 연산자
let num7 = 10
num7 += 20
num7 -= 20
num7 *= 20
num7 /= 20
num7 %= 10

// 4. 증감 연산자
let num8 = 10
// 전위 연산
++num8 // 11
// 후위 연산
num8++ // 11 -> 아랫줄에서부터 12로 증가

// 5. 논리 연산자
let or = true || false // true (1개이상 참)

let and = true && false // false (모두 참)

let not = !true // false (반전)

// 6. 비교 연산자
// === -> 값 + 타입 둘다 같은지 비교
// == -> 값이 같은지 비교
let comp1 = 1 === "1" // false (값과 타입이 같은지 비교)
let comp2 = 1 !== 2 // true (값과 타입이 다른지 비교)

let comp3 = 2 > 1 // true
let comp4 = 2 < 1 // false

let comp5 = 2 >= 2 // true
let comp6 = 2 <= 2 // true
