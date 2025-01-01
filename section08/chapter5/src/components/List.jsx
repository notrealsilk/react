import "./List.css"
import TodoItem from "./TodoItem"
import { useState } from "react"

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("")

  //  onChangeSearch : todo 검색 기능 -> useState를 사용하여 검색어를 관리
  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  // getFilteredData : 검색어(search)에 따라 todos 배열을 필터링
  const getFilteredData = () => {
    if (search === "") {
      return todos
    }
    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()))
  }

  const filteredTodos = getFilteredData()

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      {/* 검섹 state / 이벤트 헨들러 */}
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {/* map : 배열의 모든 요소에 대해 콜백함수 -> 새로운 배열로 생성*/}
        {filteredTodos.map((todo) => {
          // TodoItem 컴포넌트에 props로 데이터(todo데이터) 전달 -> 구체적인 todo 데이터 rendering
          // key: 리액트에서 배열을 렌더링할 때 각 요소에 고유한 key를 지정해야 함 (그래야 콘솔창에 에러 x)
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
        })}
      </div>
    </div>
  )
}

export default List
