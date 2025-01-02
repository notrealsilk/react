import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; // 최신순, 오래된순 정렬과 같은 가변적 데이터 다루기

const DiaryList = ({ data }) => {
  const nav = useNavigate();
  // 정렬 기준을 저장하는 상태
  // 최신순을 초기값으로 설정
  // 정렬값이 변경되면 sortType에 저장
  const [sortType, setSortType] = useState("latest");

  // 정렬 기준 변경 이벤트 핸들러 함수
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  // 정렬된 데이터를 반환하는 함수
  const getSortedData = () => {
    //toSorted() : 원본 배열을 냅두고 새로운 배열을 만들어 정렬하는 함수
    // JS는 사전순으로 정렬 -> 콜백함수로 정렬 기준을 설정
    return data.toSorted((a, b) => {
      // 오래된 순
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate);
      // 최신 순
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };

  // 컴포넌트가 리렌더링될 때마다 정렬된 데이터를 반환
  const sortedData = getSortedData();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select value={sortType} onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        {/* 새 일기 쓰기 페이지 이동 */}
        <Button
          onClick={() => nav("/new")}
          text={"새 일기 쓰기"}
          type={"POSITIVE"}
        />
      </div>
      <div className="list_wrapper">
        {/* 정렬된 데이터를 렌더링 */}
        {sortedData.map((item) => (
          // 하위 컴포넌트로 해당 달에 작성된 일기 데이터만 전달 
          <DiaryItem key={item.id} {...item} /> // 키값 꼭 설정
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
