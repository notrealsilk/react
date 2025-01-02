import "./Button.css"

// 구조분해할당으로 props를 받아오기
// 버튼 글씨체, 버튼 타입, 클릭 이벤트를 받아옴
const Button = ({ text, type, onClick }) => {
  return (
    <button
      onClick={onClick} // 클릭 이벤트
      // 버튼 타입에 따라 다른 스타일을 적용하기 위해 type을 className에 추가
      className={`Button Button_${type}`}
    >
      {text}
    </button>
  )
}

export default Button
