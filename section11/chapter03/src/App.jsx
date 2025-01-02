import "./App.css"
import {
  useRef,
  useState,
  useReducer,
  useCallback,
  createContext, // createContext import
  useMemo,
} from "react"
import Header from "./components/Header"
import Editor from "./components/Editor"
import List from "./components/List"

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

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state]
    case "UPDATE":
      return state.map((item) => (item.id === action.targetId ? { ...item, isDone: !item.isDone } : item))
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId)
    default:
      return state
  }
}
// context생성 -> 컴포넌트 외부에서 선언
// 앱 컴포넌트 내부에서 생성하면 렌더링할 때마다 새로운 컨텍스트가 생성되므로 불필요
export const TodoStateContext = createContext() // 변화할 값
export const TodoDispatchContext = createContext() // 변화하지 않는 값

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3)

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    })
  }, [])

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    })
  }, [])

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  }, [])

  // Todo 값이 있는 객체가 매번 새로 생성되는 것을 방지하기 위해 useMemo 사용
  // 컴포넌트로 전달할 때도 value에 memoizedDispatch를 전달
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete }
  }, [])

  return (
    <div className="App">
      <Header />
      {/* Provider : 컴포넌트의 일종으로 context가 공급할 데이터나 공급받을 컴포넌트 설정 */}
      {/* value : context로 전달할 데이터 */}
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
