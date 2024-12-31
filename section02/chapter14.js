// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getData() {
  // promise 객체 자체를 반환하는 함수
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterlood",
      })
    }, 1500)
  })
}

// await
// async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

// 이전 방법
// function printData() {
//   getData().then((data) => {
//     console.log(data);
//   });
// }

async function printData() {
  // getData 함수가 끝날 때까지 기다렸다가, promise 객체를 data에 할당
  const data = await getData()
  console.log(data)
}

printData() // { name: '이정환', id: 'winterlood' }
