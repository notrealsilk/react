import "./Main.css"

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
// 2. 숫자, 문자열, 배열 값만 렌더링 된다
// 3. 모든 태그는 닫혀있어야 한다
// 4. 최상위 태그는 반드시 하나여야만 한다
const Main = () => {
  const user = {
    name: "이정환",
    isLogin: true,
  }

  // css 주의 사항
  // 1. class 대신 className을 사용한다 (리액트에서 class는 예약어이기 때문)
  // 2. 태그 안에 스타일을 적용할 때는 객체 형태로 작성 + 카멜 표기법 사용
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>
  } else {
    return <div>로그인</div>
  }

  // return (
  //   <>
  //     {user.isLogin ? (
  //       <div>로그아웃</div>
  //     ) : (
  //       <div>로그인</div>
  //     )}
  //   </>
  // );
}

export default Main
