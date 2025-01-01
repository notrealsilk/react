// useReducer 불러오기
import { useReducer } from "react"

// reducer : 상태 변화를 일으키는 함수
// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
// reducer(현재 상태, 요청 내용이 담긴 액션 객체) => 변화된 상태
function reducer(state, action) {
  //if문 대신 switch문 사용
  switch (action.type) {
    case "INCREASE":
      return state + action.data // 현재 상태 + 증가시킬 값
    case "DECREASE":
      return state - action.data
    default:
      return state
  }
}

const Exam = () => {
  // dispatch : 발송하다, 급송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수

  // useReducer(상태 변환하는 함수, state 초기값)
  const [state, dispatch] = useReducer(reducer, 0)

  // 이벤트 핸들러 -> 증가 버튼 클릭
  const onClickPlus = () => {
    // 인수: 상태가 어떻게 변화되길 원하는지
    // -> 액션 객체 (type, data)
    dispatch({
      type: "INCREASE", // 액션의 종류 (값 증가)
      data: 1, // 증가시킬 값
    })
  }

  // 이벤트 핸들러 -> 감소 버튼 클릭
  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    })
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  )
}

export default Exam
