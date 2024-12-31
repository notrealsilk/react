// 단락 평가 활용 사례

function printName(person) {
  // name의 값 -> person이 없으면 undefined -> undefined는 falsy한 값이므로 "person의 값이 없음" 출력
  const name = person && person.name
  // name이 있으면 name 출력, 없으면 "person의 값이 없음" 출력
  // 단락 평가에 의해 person이 없으면 name을 확인하지 않고 "person의 값이 없음" 출력
  console.log(name || "person의 값이 없음")
}

printName() // person의 값이 없음
printName({ name: "이정환" }) // 이정환
