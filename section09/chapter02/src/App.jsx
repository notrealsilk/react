import "./App.css"
import { useRef, useState, useReducer } from "react"
import Header from "./components/Header"
import Editor from "./components/Editor"
import List from "./components/List"

// useReducer의 두번쨰 인자
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
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

// useReducer의 첫번쨰 인자
// 액션 객체를 받아서 상태를 변경하는 함수 -> 변화된 state값 리턴
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      // 변화한 값, ...기존값
      return [action.data, ...state]
    case "UPDATE":
      return state.map((item) => (item.id === action.targetId ? { ...item, isDone: !item.isDone } : item))
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId)
    default:
      return state
  }
}

function App() {
  // useReducer 불러오기
  const [todos, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3)

  // dispatch 함수만 수행하도록 바꿔주기
  const onCreate = (content) => {
    // 액션 객체 설정 (reducer 함수의 action.data이 됨)
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    })
  }

  // 수정 : dispatch 함수만 수행하도록 바꿔주기
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    })
  }

  // 삭제 : dispatch 함수만 수행하도록 바꿔주기
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
