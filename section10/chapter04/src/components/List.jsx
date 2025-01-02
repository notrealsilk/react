import "./List.css"
import TodoItem from "./TodoItem"
import { useState, useMemo } from "react"

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("")

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const getFilteredData = () => {
    if (search === "") {
      return todos
    }
    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()))
  }

  const filteredTodos = getFilteredData()

  // useMemo를 사용하여 성능 최적화
  // todos가 변경될 때만 계산됨 (메모이제이션)
  // 구조분해할당으로 totalCount, doneCount, notDoneCount를 반환
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출!")
    const totalCount = todos.length // 등록된 전체 todo 개수
    const doneCount = todos.filter(
      // 완료된 todo 개수
      (todo) => todo.isDone
    ).length
    const notDoneCount = totalCount - doneCount // 미완료된 todo 개수

    // 객체로 묶어서 반환
    return {
      totalCount,
      doneCount,
      notDoneCount,
    }
  }, [todos])
  // 의존성배열 : deps
  // deps에 있는 값이 변경될 때만 함수가 호출됨 //[]에 todos넣어줘야함

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
        })}
      </div>
    </div>
  )
}

export default List
