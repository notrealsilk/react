// 구조 분해 할당을 사용하여 props를 받아옴
const Button = ({ text, color, children }) => {
  // 이벤트 객체 (e)를 받아와서 사용할 수 있음
  const onClickButton = (e) => {
    console.log(e)
    console.log(text)
  }

  return (
    <button
      // 함수의 이름만 전달하기!!! -> 그래야 이벤트 발생 시 호출
      onClick={onClickButton}
      // onMouseEnter : 마우스가 올라갔을 때 이벤트 발생
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
