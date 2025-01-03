import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];

// <input> value에 값 넣어주기 위해 형태 변환
const getStringedDate = (targetDate) => {
  // yyyy-mm-dd
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  // 한자리수 월 처리
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

// 작성한 일기 데이터들이 저장 (useState로 상태 관리)
// onSubmit 함수를 통해 일기 데이터를 전달
const Editor = ({ onSubmit }) => {
  //state를 객체로 전달
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });
  const nav = useNavigate();

  // 날짜 변경 함수 -> input의 name과 value를 받아와서 state 업데이트
  // 이렇게 하면 오늘의 날짜가 date객체로 저장됨
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // 날짜 형식 변환
    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input, // 기존 입력값 유지
      [name]: value,
    });
  };

  // 작성완료 버튼 클릭 시 -> onSubmit 함수 호출
  const onSubmitButtonClick = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                // 이벤트 객체를 만들어서 전달해야함 -> 컴포넌트여서 이벤트 객체가 없음
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        />
      </section>
      <section className="button_section">
        {/* 뒤로가기 */}
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onSubmitButtonClick}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;
