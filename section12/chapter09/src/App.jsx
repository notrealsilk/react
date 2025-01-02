import "./App.css"
import { useReducer, useRef, createContext } from "react"
// useRef : id값을 위해 불러옴
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Diary from "./pages/Diary"
import New from "./pages/New"
import Edit from "./pages/Edit"
import Notfound from "./pages/Notfound"

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
]

function reducer(state, action) {
  // action 객체의 type에 따라 다른 작업을 수행
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state] //새로운 데이터 + 기존 데이터(스프레드 문법)
    case "UPDATE":
      // map 함수를 사용하여 id값이 일치하는 데이터를 찾아서 수정
      // 두 id값을 같은 타입으로 비교하기 위해 String() 함수 사용
      return state.map((item) => (String(item.id) === String(action.data.id) ? action.data : item))
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id))
    default:
      return state
  }
}

// 일기 데이터, 일기 데이터 관련 함수도 Context를 통해서 다른 컴포넌트에 전달
const DiaryStateContext = createContext() // 일기데이터
const DiaryDispatchContext = createContext() // 일기데이터 관련 함수

function App() {
  // 일기 추가가 되면 data에 추가되는데, 이때 useReducer 훅을 사용하여 상태를 관리
  const [data, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3) // id값을 관리하기 위한 useRef

  // 새로운 일기 추가
  // 일기 추가에 필요한 데이터 createdDate, emotionId, content를 인자로 전달
  const onCreate = (createdDate, emotionId, content) => {
    // useReducer 훅을 사용하고 있으므로
    // 새로운 데이터를 추가하려면 dispatch 함수를 사용하여 action을 전달
    dispatch({
      type: "CREATE", // action 객체의 type을 지정
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    })
  }

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    })
  }

  // 기존 일기 삭제
  // 삭제할 때는 id값만 필요하므로 id값만 전달
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    })
  }

  return (
    <>
      {/* 일기 추가 -> 이벤트 헨들러로 onCreate() 작동 */}
      <button
        onClick={() => {
          onCreate(new Date().getTime(), 1, "Hello")
        }}
      >
        일기 추가 테스트
      </button>

      <button
        onClick={() => {
          onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다")
        }}
      >
        일기 수정 테스트
      </button>

      <button
        onClick={() => {
          onDelete(1)
        }}
      >
        일기 삭제 테스트
      </button>

      {/* Provider 컴포넌트로 감싸서 일기 데이터를 하위 컴포넌트에 전달 */}
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
