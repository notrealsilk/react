import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const data = useContext(DiaryStateContext); // 일기 수정페이지에서 기존에 입력한 값 띄우기 위해 불러온 데이터
  const [curDiaryItem, setCurDiaryItem] = useState();

  // 일기 수정 페이지 진입 시, 해당 일기 데이터를 불러와서 띄워주기
  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    // 수정한 일기 데이터 임시 저장
    setCurDiaryItem(currentDiaryItem);
  }, [params.id]);

  // 삭제 알림창
  const onClickDelete = () => {
    // window.confirm() : 확인창을 띄워주는 함수 (확인, 취소 버튼 ㅇ)
    if (
      window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")
    ) {
      // 일기 삭제 로직
      // 기존에 App.jsx에 정의한 일기 삭제 함수 사용
      onDelete(params.id);
      // 삭제 후 홈으로 이동, 뒤로 가기 방지(replace: true)
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      // params의 데이터를 기준으로 값을 받아와서 이전에 사용자가 입력한 값을 띄움
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />
        }
        rightChild={
          <Button
            onClick={onClickDelete}
            text={"삭제하기"}
            type={"NEGATIVE"} // 버튼색
          />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
