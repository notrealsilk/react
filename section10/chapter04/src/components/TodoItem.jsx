import "./TodoItem.css"
// memo : props가 변경되지 않으면 리렌더링 안됨
import { memo } from "react"

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id)
  }

  const onClickDeleteButton = () => {
    onDelete(id)
  }

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  )
}

// 2. Memo(컴포넌트,콜백함수)
// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라, Props가 바뀌었는지 안바뀌었지 판단
//   // T -> Props 바뀌지 않음 -> 리렌더링 X
//   // F -> Props 바뀜 -> 리렌더링 O

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });

// props가 바뀌지 않으면 리렌더링 안됨
// memo는 얕은 비교를 함 -> 함수와 같은 객체 타입의 경우 매번 다른 메모리에 할당되므로 리렌더링 됨
// 객체 타입의 props를 받을 때는 깊은 비교를 해야함 (아니면 리렌더링 계속 발생 -> 성능 저하)
// 해결법 -> 1. useCallback, useMemo 사용 2. memo()의 두번째 인자로 콜백함수를 넣어줌
export default memo(TodoItem)
