import { getEmotionImage } from "../util/get-emotion-image"; // util 폴더 안의 함수 가져오기
import Button from "./Button"; 
import "./DiaryItem.css";

const DiaryItem = () => {
  const emotionId = 5;

  return (
    <div className="DiaryItem">
      {/* 감정 이미지 */}
      <div className={`img_section img_section_${emotionId}`}>
        {/* util 폴더 안의 함수 적용 */}
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_section">
        <div className="created_date">
          {new Date().toLocaleDateString()}
        </div>
        <div className="content">일기 컨텐츠</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
