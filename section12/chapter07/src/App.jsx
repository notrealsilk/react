import "./App.css"
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Home from "./pages/Home"
import Diary from "./pages/Diary"
import New from "./pages/New"
import Notfound from "./pages/Notfound"
import Button from "./components/Button"
import Header from "./components/Header"

import { getEmotionImage } from "./util/get-emotion-image"

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const nav = useNavigate()

  const onClickButton = () => {
    nav("/new")
  }

  return (
    <>
      <Header title={"Header"} leftChild={<Button text={"Left"} />} rightChild={<Button text={"Right"} />} />

      {/* type 생략하면 type에 undefined가 들어와서 기본값이 적용 ㅇ */}
      <Button
        text={"123"}
        onClick={() => {
          console.log("123번 버튼 클릭!")
        }}
      />

      <Button
        text={"123"}
        type={"POSITIVE"} // 각 버튼마다 다른 props의 값을 적용하려면 type을 사용
        onClick={() => {
          console.log("123번 버튼 클릭!")
        }}
      />

      <Button
        text={"123"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭!")
        }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
