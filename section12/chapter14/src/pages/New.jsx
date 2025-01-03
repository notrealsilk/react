import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  // onSubmit 함수를 통해 일기 데이터를 전달
  const onSubmit = (input) => {
    onCreate(
      input.createdDate.getTime(),
      input.emotionId,
      input.content
    );
    // 작성완료버튼 누르면 홈으로 이동
    // replace: true -> 뒤로가기 했을 때 다시 이 페이지로 돌아가지 않도록 함
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={
          // nav(-1) -> 페이지 뒤로 가기
          <Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />
        }
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
