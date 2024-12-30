// 함수
let area1 = getArea(10, 20)
console.log(area1) // 200 -> 리턴값

let area2 = getArea(30, 20)
console.log(area2)

getArea(120, 200)

// 호이스팅
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another")
  }

  another() // 중첩함수 호출 ..getArea() 호출할 때마다 another() 호출
  let area = width * height

  return area
}
