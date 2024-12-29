# 5. 리액트 입문

## 프로젝트 생성

1. Node.js 설치 확인

```bash
node -v
npm -v
```

2. 리액트 프로젝트 생성

```bash
  # 프로젝트 생성
  npx create-react-app 프로젝트이름

  # 프로젝트 폴더로 이동
  cd 프로젝트이름

  # 개발 서버 실행
  npm start

```

## 설정

#### ESLint

- 잘못된 코드가 있으면 에러를 표시해주는 린트 도구

#### .eslintrc.cjs 설정법

- rules에 "no-unused-vars": "off" 추가 -> 코드상에 실제로 사용하지 않는 변수가 있을 때 오류를 알려줌

- "react/prop-types": "off" -> prop-types를 사용하지 않아도 오류를 표시하지 않음

## components

- 각 컴포넌트를 담는 폴더

- 일반적으로 App 컴포넌트를 루트 컴포넌트로 사용

## JSX

![img](./image/1.png)

- 자바스크립트의 확장 문법

- 효율적으로 UI를 구성할 수 있는 리액트의 문법

- html 요소에 {}를 사용하여 자바스크립트 표현식을 사용할 수 있음

  - 조건문, 반복문 등을 사용할 수 없음

  - 숫자, 문자열, 배열 값만 렌더링 됨 (t, f, null, undefined, 객체는 렌더링 되지 않음)

  - 모든 태그는 닫혀있어야 함

  - 최상위 태그는 1개여야만 함 (빈태그 `<>` `</>` 사용 가능)

```jsx
const number = 1;

h1>안녕하세요 {number}</h1> // 안녕하세요 1
```

## css 적용

### css 주의 사항

1. Main.css 파일을 만들어서 css를 적용할 경우, class 대신 className을 사용한다 (리액트에서 class는 예약어이기 때문)

2. 태그 안에 스타일을 적용할 때는 객체 형태로 작성 + 카멜 표기법 사용

```jsx
if (user.isLogin) {
  return <div className="logout">로그아웃</div>
} else {
  return <div>로그인</div>
}
```

## props

![img](./image/2.png)

- 부모 컴포넌트에서 자식컴포넌트로 데이터를 전달할 때 사용

![img](./image/3.png)

- Props 전달: App.jsx에서 Button 컴포넌트를 호출하며 서로 다른 text 값을 전달 / `<Button text={"메일"} />`에서 객체인 text를 전달

- Props 접근: Button.jsx에서 props 객체를 통해 부모가 전달한 데이터를 확인하고 사용

## 이벤트 핸들링

웹 내부에서 발생하는 사용자 행동

- 합성 이벤트 객체

  - 모든 브라우저에서 동일한 이벤트 객체를 사용할 수 있게 함 (cross-browser 문제에서 자유롭게 함)

  - 브라우저마다 이벤트 객체가 다르기 때문에 리액트에서는 합성 이벤트 객체를 통해 통일된 이벤트 객체를 사용할 수 있게 함

## State

![img] (./image/4.png)

- 컴포넌트 내부에서 바뀔 수 있는 값을 관리

- state를 갖는 컴포넌트는 state의 값에 따라서 ui를 업데이트 함 (상태 변화시, 리렌더링)

- `import { useState } from "react";` -> useState 함수를 사용하여 state를 사용할 수 있음

![img](./image/5.png)

- useState 함수 : 배열을 반환하며, 첫 번째 원소는 state 값, 두 번째 원소는 state를 업데이트하는 함수 = 상태변화 함수

- 상태변화 함수 : state를 업데이트할 때는 상태변화 함수를 사용하여 업데이트함

- 리엔더링이 발생하는 상황

  - state가 업데이트되면 컴포넌트는 리렌더링됨

  - 제공받은 props가 변경되면 컴포넌트는 리렌더링됨

  - 부모 컴포넌트가 리렌더링되면 자식 컴포넌트는 리렌더링됨

## State를 활용한 로그인 폼 만들기

- 회원가입 만들기 가능

  ![img](./image/6.png)

  - 콘솔창에서 target -> value엣서 input의 값 확인 가능

  '''jsx
  return(
  <div>
  <input
  value={name}
  onChange={onChangeName}
  placeholder={"이름"} {/_ placeholder -> 아무 값도 입력안했을 때 회색으로 나오는 문구_/}
  />
  </div>
  )
  '''

  - 사용자의 입력, 처리할 때, 초기값을 활용하는 경우가 있기 때문에, onChange()뿐만아니라 value 속성까지 함께 설정하기!

## State 묶어주기

- 각 state를 하나의 객체로 묶어서 데이터 관리하기

```jsx
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    gender: "",
    bio: "",
  });

  // 이벤트 핸들러도 통합가능
  const onChange = (e) => {
  console.log(e.target.name + " : " + e.target.value)
  setInput({
    // 전개 구문 -> 변경 x값 / 변경 o값만 객체에 추가
    ...input,
    [e.target.name]: e.target.value,
  })
}
```

## useRef

- 새로운 레퍼런스 객체를 생성하는 기능

- 리렌더링에 영향을 받지 않는 값을 관리할 때 사용

  - 컴포넌트가 리렌더링되어도 변수가 다시 리셋되지 않음

  - 리액트는 컴포넌트 외부에 변수를 선언하는 것이 권장 x

  -> so, 이럴 경우 useRef를 사용하여 해결

![Img](./image/7.png)

- 특정 요소의 조작, 특정 요소에 포커스를 줄 때 사용

![Img](./image/8.png)

## react Hooks

- 클래스 컴포넌트에서만 사용할 수 있는 기능을 함수 컴포넌트에서 사용할 수 있게 해주는 기능

- src/hooks 폴더 생성하여 커스텀 Hooks 생성 가능

- 예시

  - useState : 함수 컴포넌트에서도 state를 사용할 수 있게 해줌
  - useRef : 함수 컴포넌트에서도 ref를 사용할 수 있게 해줌

  -> react Hooks은 use 접두사를 가지고 있음

![img](./image/9.png)

- 함수 컴포넌트 내부에서만 호출 가능

- 조건문, 반복문 내부에서는 사용 불가능

- 커스텀 Hooks도 만들 수 있음
