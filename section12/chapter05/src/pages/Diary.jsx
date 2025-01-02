import { useParams } from "react-router-dom" // useParams 훅을 불러오기.

const Diary = () => {
  const params = useParams() // useParams 훅을 사용하여 URL 파라미터를 조회
  console.log(params)

  return <div>{params.id}번 일기입니다 ~~</div>
}

export default Diary
