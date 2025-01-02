import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Diary from "./pages/Diary"
import New from "./pages/New"
import Notfound from "./pages/Notfound"

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  return (
    <>
      <div>Hello</div>
      {/* Routes : 여러개의 Route를 가지고 있는 컴포넌트, 다른 태그는 사용할 수 없음 */}
      <Routes>
        {/* path : 경로 element : 렌더링 하고자하는 컴포넌트 */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        {/* 와일드 카드 `*` : 일치하는 경로가 없으면 아래 컴포넌트가 출력 */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
