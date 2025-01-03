import "./EmotionItem.css";
import { getEmotionImage } from "../util/get-emotion-image";

// props로 전달받은 감정 이미지id 및 이미지 이름을 화면에 렌더링
const EmotionItem = ({ emotionId, emotionName, isSelected }) => {
  return (
    // props로 전달받은 isSelected 값에 따라 클래스명 추가
    <div
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}
    >
      <img className="emotion_img" src={getEmotionImage(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
