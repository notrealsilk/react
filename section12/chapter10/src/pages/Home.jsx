import Header from "../components/Header"
import Button from "../components/Button"
import DiaryList from "../components/DiaryList"

// 기존에 App.js에 있던 코드를 Home.js로 옮김
const Home = () => {
  return (
    <div>
      <Header title={"2024년 2월"} 
      leftChild={<Button text={"<"} />} 
      rightChild={<Button text={">"} />} />
      <DiaryList />
    </div>
  )
}

export default Home
