// 구조 분해 할당을 사용하여 props를 받아옴
const Button = ({ text, color, children }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e)
    console.log(text)
  }

  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()} {/* text와 color 값을 화면에 표시 */}
      {children}
    </button>
  )
}

// defaultProps: 컴포넌트에 전달된 props가 없을 때 기본값을 설정
Button.defaultProps = {
  color: "black", // color가 전달되지 않으면 기본값으로 black 사용
}

export default Button
