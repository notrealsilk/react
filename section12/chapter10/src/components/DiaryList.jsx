import "./DiaryList.css"; // CSS 파일을 import하여 사용
import Button from "./Button";
import DiaryItem from "./DiaryItem";

const DiaryList = () => {
  return (
    // 메뉴바
    <div className="DiaryList">
      {/* 다이어리 리스트 */}
      <div className="menu_bar">
        <select>
          {/* state로 value값 관리하기 위해 {""}형식으로 작성 */}
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        {/* 이전에 만든 버튼 컴포넌트 가져와서 배치 */}
        <Button text={"새 일기 쓰기"} type={"POSITIVE"} />
      </div>
      {/* DiaryItem 를 자식 컴포넌트로 렌더링 */}
      <div className="list_wrapper">
        <DiaryItem />
      </div>
    </div>
  );
};

export default DiaryList;
