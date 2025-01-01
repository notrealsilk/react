import "./TodoItem.css"

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  // 체크박스 변경 이벤트 핸들러
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
      <div className="date">
        {/* 새로운 데이트 객체 생성하면서 타임스템프 전달*/}
        {new Date(date).toLocaleDateString()}
      </div>
      {/* 삭제 버튼 클릭 시 onDelete 함수 호출 */}
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  )
}

export default TodoItem
