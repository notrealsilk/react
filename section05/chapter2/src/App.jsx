import "./App.css"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

// 부모(루트) 컴포넌트 : App
// 자식 컴포넌트 : Header, Main, Footer
// -> 함수 컴포넌트로 만들어서 export default로 내보내기
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
