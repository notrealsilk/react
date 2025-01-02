import "./Header.css"
import { memo } from "react"

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  )
}

// memo로 감싸주면 props가 변경되지 않으면 리렌더링 안됨
// 헤더 컴포넌트의 props가 변경되지 않으면 자식 컴포넌트 리렌더링 안됨
export default memo(Header)

//////////////////////////////
// 같은 표현
// constmemoHeader = memo(Header);

// export default memoHeader;
