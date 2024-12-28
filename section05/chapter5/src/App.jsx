import "./App.css"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Button from "./components/Button"

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  }

  // buttonProps에 담긴 요소를 구조 분해 할당으로 Button 컴포넌트에 전달
  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <Header /> {/* {자식 props} */}
      </Button>
    </>
  )
}

export default App
