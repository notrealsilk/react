import "./App.css"
import Viewer from "./components/Viewer"
import Controller from "./components/Controller"
import Even from "./components/Even"
import { useState, useEffect, useRef } from "react"

function App() {
  const [count, setCount] = useState(0)
  const isMemory = useRef(false)

  // 1. 마운트: 처음 화면에 렌더링될 때만 실행
  useEffect(() => {
    console.log("mount")
  }, []) // 빈 배열 의존성: 마운트 시 한 번만 실행

  // 2. 업데이트
  useEffect(() => {
    if (!isMemory.current) {
      isMemory.current = true
      return // 초기 렌더링 이후에만 아래 코드 실행
    }
    console.log("update")
  }, [count]) // count가 변경될 때 실행

  // 3. 언마운트
  useEffect(() => {
    return () => {
      console.log("unmount")
    }
  }, []) // 빈 배열 의존성: 컴포넌트 언마운트 시 한 번만 실행

  const onClickButton = (value) => {
    setCount(count + value)
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {/* count가 짝수일 때만 Even 컴포넌트 렌더링 */}
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
