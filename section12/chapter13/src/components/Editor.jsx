import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";

// 감정 리스트 데이터 -> 리턴문에서는 map메서드로 해당하는 리스트 렌더링
// 중복 방지!!
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

const Editor = () => {
  // 현재 선택된 감정 아이디 (초기값은 임의로 5로 설정)
  const emotionId = 5;

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {/* map함수를 이용해서 중복 방지 */}
          {emotionList.map((item) => (
            // props로 동적인 감정 이미지id 및 이미지 이름 전달
            <EmotionItem
              key={item.emotionId}
              {...item} // emotionId, emotionName 전달
              // id가 선택된 감정의 id와 일치하는지 여부 (true/false)
              isSelected={item.emotionId === emotionId} // 선택된 감정인지 여부
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea placeholder="오늘은 어땠나요?" />
      </section>
      <section className="button_section">
        {/* 기존의 버튼 컴포넌트 사용 */}
        <Button text={"취소하기"} />
        <Button text={"작성완료"} type={"POSITIVE"} />
      </section>
    </div>
  );
};

export default Editor;
