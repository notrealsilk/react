import "./App.css"
import { useReducer } from "react" // 일기 데이터를 관리하기 위해 useReducer를 사용
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Diary from "./pages/Diary"
import New from "./pages/New"
import Edit from "./pages/Edit"
import Notfound from "./pages/Notfound"

// 임시 일기 데이터
const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(), // 타임스템프로 날짜 생성
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

// reducer() 함수를 만들어서 useReducer() 훅에 전달
function reducer(state, action) {
  return state
}

function App() {
  // useReducer() 훅을 사용해서 데이터를 관리
  //useReducer(reducer함수, 임시 일기 데이터)
  const [data, dispatch] = useReducer(reducer, mockData)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
