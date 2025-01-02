import { useNavigate } from "react-router-dom"; // 라우터로 페이지 이동
import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import "./DiaryItem.css";

// 부모 컴포넌트로부터 전달받은 props를 사용하여 일기 데이터를 화면에 표시
// 해당 월에 해당하는 일기만 조회할 수 있도록 하는 기능
const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  // 페이지 이동하게 하는 함수
  const nav = useNavigate();

  // 일기 페이지로 이동 -> 이벤트 헨들러
  const goDiaryPage = () => {
    nav(`/diary/${id}`);
  };

  // 수정 페이지로 이동 -> 이벤트 헨들러
  const goEditPage = () => {
    nav(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goDiaryPage}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div onClick={goDiaryPage} className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button onClick={goEditPage} text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
