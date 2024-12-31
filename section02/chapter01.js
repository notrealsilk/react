// 1. Falsy한 값
// 조건문에서 거짓으로 판단되는 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // 아주 큰 값 (웹 개발에선 사용 x)

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
// 웹에서 데이터를 가져올 때 데이터가 없을 수도 있음
// 그럴 때를 대비해서 truthy, falsy한 값들을 이용해서 조건문을 사용할 수 있음
function printName(person) {
    // 객체의 특정 프로퍼티에 접근하는 기능의 함수에서는 조건문으로 매개변수 값이 null, undefined이 아닌지 검사하는 것이 좋다.
  if (!person) {
    console.log("person의 값이 없음");
    // 값이 없거나 정의되지 않았을 때 함수를 종료시켜서 아래의 점 표기법 실행 안해서 오류 방지
    return;
  }
  console.log(person.name);
}

let person = { name: "이정환" };
printName(person); 
