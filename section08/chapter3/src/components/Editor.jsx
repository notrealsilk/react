import { useRef, useState } from "react"
import "./Editor.css"

// App.js에서 받아온 onCreate 함수를 불러옴
const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("")
  const inputRef = useRef() // 소소기능 1: 포커스 기능 위해 추가

  // 이벤트 핸들러 -> input 태그에 입력되면 호출
  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  // 소소기능3 : 엔터키를 누르면 추가버튼을 클릭한 것과 동일한 효과를 내기 위해 추가
  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit()
    }
  }

  // 이벤트 헨들러 -> 추가 버튼 클릭하면 호출
  const onSubmit = () => {
    // 소소기능1 : 입력값이 없으면 포커스를 다시 input 태그로 이동
    if (content === "") {
      inputRef.current.focus()
      return
    }
    // 추가버튼을 클릭하면 부모컴포넌트에서 온 상태변화함수인 onCreate 호출
    // 인자로 content를 전달  -> App.js의 onCreate 함수가 호출됨
    onCreate(content)
    setContent("") // 소소기능2 : 기존의 입력값 초기화
  }

  return (
    <div className="Editor">
      {/* 특정 돔 요소에 접근 (소소기능1: 포커스 기능 위해 추가) / 입력된 값을 content와 연결 / 값 변경되면 작동하는 이벤트 헨들러 / 사용자가 키를 누르면 작동하는 핸들라 */}
      <input ref={inputRef} value={content} onChange={onChangeContent} onKeyDown={onKeydown} placeholder="새로운 Todo..." />
      {/* 이벤트 핸들러 -> 버튼 클릭하면 onSubmit 호출  */}
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor
