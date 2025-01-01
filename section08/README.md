# 투두 리스트

TodoList 데모사이트 링크 :

https://chapter7-dun.vercel.app/

![img](./1.png)

## 개발환경 세팅

1. 프로젝트 생성

```bash
$ npx create vite@latest
```

-> 리액트, 자바스크립트 선택

- 해당 프로젝트로 이동

2. 라이브러리 설치 및 리액트 실행

```bash
$ npm i
```

```bash
npm run dev
```

3. ESSLint 설정, 필요없는 파일 제거

```cjs
rules: {
  "no-unused-vars": "off",
  "react/prop-types": "off",
}
```

## UI 구성

1. 컴포넌트 구성

- 헤더, 에디터, 리스트 컴포넌트 필요

  - `App.jsx`의 기본 구성

  ```jsx
  import "./App.css"

  function App() {
    return <>TodoList </>
  }

  export default App
  ```

  - App.jsx에서 `Header` 컴포넌트를 사용하기 위해 import

  ```jsx
  // 자식 컴포넌트를 import해야 App 컴포넌트에서 사용 가능
  import Header from "./components/Header"

  function App() {
    return (
      <>
        <Header />
      </>
    )
  }

  export default App
  ```

  - `자식 컴포넌트`의 기본 구성

  ```jsx
  const Header = () => {
    return (
      <div>
        <h1>TodoList</h1>
      </div>
    )
  }

  export default Header
  ```

2. 컴포넌트.css 파일 생성

#### 컴포넌트.css 파일 생성 후, 컴포넌트에 import

- `import "./App.css"` : App.css 파일을 App.jsx 에 import

- App.jsx : 스타일 적용하고 싶은 태그에 className을 추가

- App.css : 스타일링

#### 스타일링

- display:flex 관련 아티클

  https://one-step-js.hyobb.com/6ae9fe72-81b5-491b-8b8e-dc50c4c9be16#c0a0b3c0a2494bb78d7f3c88e9f048c9

  ```css
  .App {
    /* 요소들을 화면 가운데 배치 */
    width: 500px;
    margin: 0 auto;

    display: flex; /* 자식 요소를 가로로 배치 (자식요소 구성을 용이하게 해줌) */
    flex-direction: column; /* display를 열 기준으로 세로로 요소 배치 */
    gap: 10px; /* display: flex;가 적용된 요소간의 간격을 생성  */
  }
  ```

##### css 선택자

- `.Editor > input{}` : 직접적인 자식 요소만!!! 선택할 때 사용

- `.Editor  input{}` : 모든 하위 input 태그에 적용

  ```css
  /* Header 컴포넌트에 있는 h1 태그에 스타일을 적용 */
  .Header > h1 {
    color: rgb(37, 147, 255);
  }
  ```

- `:focus` : 특정 요소에 포커스를 맞추었을 때 적용되는 상태

  ```css
  <!-- HTML -->
  <!-- <input placeholder="검색어를 입력하세요" /> -->

  .Editor > input:focus {
    border-color: rgb(37, 147, 255);
    <!-- 포커스가 있을 때만 배경색 변경 -->
  }
  ```

- 이모지 아이콘

  - 윈도우 : `윈도우키 + .`
  - 맥 : `control + command + space`

## 기능 구현

- todoitem을 state로 관리 -> todoitem을 추가, 삭제, 수정하면 화면에 바로 반영!! / app.jsx에서 관리

  ```jsx
  // App 컴포넌트에서 사용할 초기 데이터 (임시 데이터)
  // 각 todo를 객체로 관리
  const mockData = [
    {
      id: 0, // 고유 id
      isDone: false, // 체크박스
      content: "React 공부하기", // 내용
      date: new Date().getTime(), // 생성날짜 / 타임스템프 사용
    },
  ]

  function App() {
    // state로 todos 배열을 관리
    // mockData를 초기값으로 설정 -> 화면이 처음 렌더링되면 mockData가 화면에 출력
    const [todos, setTodos] = useState(mockData)
  }
  ```

  ### todo CRUD

  - Editor 컴포넌트에서 입력한 내용(content)을 받아서 todos 배열에 추가 (onCreate)

  - props로 Editor 컴포넌트에 함수를 전달

  ```jsx
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }

    // push 대신 상태변화함수인 setTodo를 사용해야 인수로 받은 데이터를 todos 배열에 추가할 수 있음
    // 그래야 리액트가 상태변화를 감지하고 화면을 다시 렌더링함 (setState 함수를 사용해야 함)
    setTodos([newTodo, ...todos]) // 새로 추가한 todo + 기존 todos 배열 (스프레드 연산자 사용)
  }

  return (
    <div className="App">
      <Editor onCreate={onCreate} /> {/* props로 데이터 전달 */}
      {/* props 변수명 = 부모컴포넌트의 함수 */}
    </div>
  )
  ```

  ### Create

  ### Read

  ### Update

  ### Delete
