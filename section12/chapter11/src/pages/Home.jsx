import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
// useState : 가변적 데이터 다루기 (년,월 변경)
// useContext : 일기 데이터 관리
// DiaryStateContext : 일기 데이터 조회 (App.js에서 export)
import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

// 해당 년, 월에 해당하는 일기만 조회할 수 있도록 하는 기능
// 해당달의 시작과 끝나는 날을 알아야 일기를 조회할 수 있음
const getMonthlyData = (pivotDate, data) => {
  // 시작하는 날짜
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  // 끝나는 날짜
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime(); // 타임스템프

  // filter 함수를 사용하여 해당 날짜에 해당하는 일기만 조회
  return data.filter(
    (item) =>
      beginTime <= item.createdDate && item.createdDate <= endTime
  ); // 해당하는 달의 일기만 새로운 객체로 반환
};

const Home = () => {
  // useContext가 제공하는 일기 데이터를 저장
  const data = useContext(DiaryStateContext);
  //pivotDate : 일기 조회의 기준이 되는 날짜
  // 초기 날짜를 new Date()로 설정
  const [pivotDate, setPivotDate] = useState(new Date());

  // 해당 월에 해당하는 일기만 조회
  const monthlyData = getMonthlyData(pivotDate, data);

  // 월 변경 버튼 이벤트 핸들러 함수

  const onIncreaseMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
    );
  };

  const onDecreaseMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
    );
  };

  return (
    <div>
      <Header
        // 년,월이 값이 변화할 때마다 헤더의 title도 변화
        title={`${pivotDate.getFullYear()}년 ${
          pivotDate.getMonth() + 1 // 0부터 시작하므로 +1
        }월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      {/* 해당하는 달의 일기 데이터를 전달 */}
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
