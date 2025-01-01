import "./App.css"
import { useRef, useState } from "react"
import Header from "./components/Header"
import Editor from "./components/Editor"
import List from "./components/List"

// App 컴포넌트에서 사용할 초기 데이터 (임시 데이터)
// 각 todo를 객체로 관리
const mockData = [
  {
    id: 0, // 고유 id
    isDone: false, // 체크박스
    content: "React 공부하기", // 내용
    date: new Date().getTime(), // 생성날짜 / 타임스템프 사용
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
]

function App() {
  // state로 todos 배열을 관리
  // mockData를 초기값으로 설정 -> 화면이 처음 렌더링되면 mockData가 화면에 출력
  const [todos, setTodos] = useState(mockData)
  // useRef를 사용하여 고유 id를 관리
  const idRef = useRef(3) // 초기 id 값은 3 (다른 값과 겹치지 않게하기 위해..)

  // Editor 컴포넌트에서 입력한 내용(content)을 받아서 todos 배열에 추가 (onCreate)
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++, // useRef를 사용하여 id를 관리 / 새로운 값이 입력되면 1씩 증가
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }

    // push 대신 상태변화함수인 setTodo를 사용해야 인수로 받은 데이터를 todos 배열에 추가할 수 있음
    // 그래야 리액트가 상태변화를 감지하고 화면을 다시 렌더링함 (setState 함수를 사용해야 함)
    setTodos([newTodo, ...todos]) // 새로 추가한 todo + 기존 todos 배열 (스프레드 연산자 사용)
  }

  // 수정 : 체크박스 클릭 시 isDone 값 변경
  // todoitem 컴포넌트로 pros로 데이터 전달
  const onUpdate = (targetId) => {
    // todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    // id값이 같다면 isDone값을 반대로 변경 (스프레드 연산자로 다른 todo는 냅두고 해당 todo만 토글) / 아니라면 기존 todo 그대로
    setTodos(todos.map((todo) => (todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo)))
  }

  // DELETE : 삭제 버튼 클릭 시 해당 아이템 삭제
  const onDelete = (targetId) => {
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    // filter : 조건에 맞는 요소만 추출하여 새로운 배열로 반환 (id가 같아야 삭제 ㅇ)
    setTodos(todos.filter((todo) => todo.id !== targetId))
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} /> {/* props로 데이터 전달 */} {/* props 변수명 = 부모컴포넌트의 함수 */}
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      {/* READ 기능을 위해 todos 데이터를 list 컴포넌트로 넘김 */}
      {/* UPDATE 기능을 위해 onUpdate함수를 하위 컴포넌트로 넘김 */}
      {/* DELETE 기능을 위해 onDelete힘수를 하위 컴포넌트로 넘김*/}
    </div>
  )
}

export default App
