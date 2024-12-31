// 비동기 작업1의 결과를 또다른 비동기 작업2의 인수로 전달하는 방법

// 기본 예시

function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b /// 3
    callback(sum)
  }, 1000)
}

add(1, 2, (result) => {
  console.log(result) // 3
})

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이"
    callback(food)
  }, 3000)
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`
    // 인수로 함수 바깥으로 값을 전달
    callback(cooldownedFood)
  }, 2000)
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`
    callback(freezedFood)
  }, 1500)
}

// 함수 내부에 있는 값을 콜백함수를 이용해서 꺼내옴
orderFood((food) => {
  console.log(food) // 떡볶이

  // 비동기 함수를 비동기 함수 안에서 호출
  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood)

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood)
    })
  })
})

// but, 이렇게 히면 콜백 지옥.. -> Promise 사용!
