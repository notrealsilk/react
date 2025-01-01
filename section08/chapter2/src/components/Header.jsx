import "./Header.css"

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      {/* date 객체 생성*/}
      {/* .toDateString() : 객체를 문자열로 변환해서 읽기 편하게 데이터 렌더링 */}
      <h1>{new Date().toDateString()}</h1>
    </div>
  )
}

export default Header
