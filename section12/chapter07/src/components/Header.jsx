import "./Header.css"

// 상위 컴포넌트에서 title, leftChild, rightChild를 props로 받아와서 화면에 렌더링
const Header = ({ title, leftChild, rightChild }) => {
  return (
    <header className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{rightChild}</div>
    </header>
  )
}

export default Header
