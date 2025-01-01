# useReducer (Hook)

## useReducer란?

- 컴포넌트 내부에 새로운 sttate를 생성하는 훅
- usesState를 대체 가능
- 상태 관리 코드를 외부와 분리하여 컴포넌트의 가독성을 높일 수 있음

### useReducer VS useState

- useState
  - 컴포넌트에서 관리하는 값이 하나고, 그 값이 단순한 숫자, 문자열, boolean일 때 사용
- useReducer

  - 컴포넌트에서 관리하는 값이 여러개이거나, 값이 복잡한 객체, 배열일 때 사용

  - 컴포넌트 내부에 useState가 여러개 존재하면 복잡.. -> useReducer 사용해서 빠르게 렌더링 + 가독성 높임

#### 1. 구성 요소

- **`reducer` 함수**: 상태 변화를 실제로 처리하는 함수.
- **`dispatch` 함수**: 상태 변화 요청(액션)을 발송하는 함수.
- **`action 객체`**: 상태 변화를 정의하는 데이터로 `type`과 추가 데이터(`data`)로 구성.

---

#### 2. 코드 흐름

1. **`useReducer`로 상태 관리 초기화**:
   ```js
   const [state, dispatch] = useReducer(reducer, 0) // 초기 상태값: 0
   ```
2. **`reducer` 함수로 상태 변화 처리**:
   ```js
   function reducer(state, action) {
     switch (action.type) {
       case "INCREASE":
         return state + action.data // 현재 상태에 값을 더함
       case "DECREASE":
         return state - action.data // 현재 상태에서 값을 뺌
       default:
         return state // 기본적으로 상태를 그대로 반환
     }
   }
   ```
3. **`dispatch`로 액션 발송**:
   - **증가 버튼 클릭**:
     ```js
     dispatch({ type: "INCREASE", data: 1 })
     ```
   - **감소 버튼 클릭**:
     ```js
     dispatch({ type: "DECREASE", data: 1 })
     ```

---

#### 3. 주요 기능

1. **`reducer`**:

   - 상태 변화 로직을 switch-case로 정의.
   - **현재 상태(state)**와 **액션(action)**을 받아 새로운 상태를 반환.

2. **`dispatch`**:

   - 특정 액션(type)을 발송하여 상태 변화 요청.
   - 액션 객체 구조:
     ```js
     { type: "액션_타입", data: 변경값 }
     ```

3. **컴포넌트**:
   - `state`를 UI에 표시 (`<h1>{state}</h1>`).
   - 버튼 클릭 시 상태 변화:
     - `dispatch`로 액션 객체 전달.

---

#### 4. 핵심 코드 요약

- **Reducer 함수**:

  ```js
  function reducer(state, action) {
    switch (action.type) {
      case "INCREASE":
        return state + action.data
      case "DECREASE":
        return state - action.data
      default:
        return state
    }
  }
  ```

- **useReducer 초기화**:

  ```js
  const [state, dispatch] = useReducer(reducer, 0) // 초기 상태: 0
  ```

- **액션 발송**:
  ```js
  dispatch({ type: "INCREASE", data: 1 }) // 증가 요청
  dispatch({ type: "DECREASE", data: 1 }) // 감소 요청
  ```

---

#### 5. 복습 포인트

1. **`useReducer`**:
   - 상태와 상태 변화 로직을 깔끔하게 관리.
2. **`reducer`**:
   - 상태 변화를 switch-case로 정의.
3. **`dispatch`**:
   - 액션 객체로 상태 변화 요청.

---

## todo list 업그레이드

- `useState`에서 `useReducer`로 변경

#### 1. 주요 차이점

- **`useState`**: 개별 상태 변경 로직을 각 함수(`onCreate`, `onUpdate`, `onDelete`)에 정의.
- **`useReducer`**: 모든 상태 변경 로직을 `reducer` 함수에 통합하고, `dispatch`로 상태 변경 요청.

---

#### 2. 변경 방식

1. **`useState` → `useReducer`로 상태 관리 변경**

   ```js
   // useState
   const [todos, setTodos] = useState(mockData)

   // useReducer
   const [todos, dispatch] = useReducer(reducer, mockData)
   ```

2. **상태 변경 로직 통합**

   - `useState`에서는 상태를 변경하는 로직이 각 함수 내부에 정의.
   - `useReducer`에서는 `reducer` 함수에서 상태 변경 로직을 관리.

   ```js
   // reducer 함수
   function reducer(state, action) {
     switch (action.type) {
       case "CREATE":
         return [action.data, ...state]
       case "UPDATE":
         return state.map((item) => (item.id === action.targetId ? { ...item, isDone: !item.isDone } : item))
       case "DELETE":
         return state.filter((item) => item.id !== action.targetId)
       default:
         return state
     }
   }
   ```

3. **상태 변경 함수 리팩터링**

   - `useReducer`에서는 각 상태 변경 함수가 `dispatch`를 호출하는 형태로 단순화.

   ```js
   // CREATE
   const onCreate = (content) => {
     dispatch({
       type: "CREATE",
       data: {
         id: idRef.current++,
         isDone: false,
         content,
         date: new Date().getTime(),
       },
     })
   }

   // UPDATE
   const onUpdate = (targetId) => {
     dispatch({ type: "UPDATE", targetId })
   }

   // DELETE
   const onDelete = (targetId) => {
     dispatch({ type: "DELETE", targetId })
   }
   ```

---

#### 3. 주요 코드 비교

| **기능**   | **useState**                                                                                        | **useReducer**                                             |
| ---------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| **초기화** | `const [todos, setTodos] = useState(mockData);`                                                     | `const [todos, dispatch] = useReducer(reducer, mockData);` |
| **추가**   | `setTodos([newTodo, ...todos]);`                                                                    | `dispatch({ type: "CREATE", data: newTodo });`             |
| **수정**   | `setTodos(todos.map((todo) => (todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo)));` | `dispatch({ type: "UPDATE", targetId });`                  |
| **삭제**   | `setTodos(todos.filter((todo) => todo.id !== targetId));`                                           | `dispatch({ type: "DELETE", targetId });`                  |

---

#### 4. 변경 후 장점

1. **상태 관리 로직 통합**:
   - `reducer`에서 상태 변경 로직을 관리해 코드가 더 읽기 쉽고 유지보수가 용이.
2. **명확한 상태 변경 요청**:
   - `dispatch`로 액션 타입과 데이터를 전달해 상태 변경 요청을 명확히 표현.
3. **복잡한 상태 관리 가능**:
   - 여러 상태를 관리하거나 복잡한 로직이 필요한 경우 `useReducer`가 적합.

---

#### 5. 복습 포인트

1. `useReducer`의 두 인자:
   - **`reducer`**: 상태 변경 로직.
   - **`초기 상태`**: 상태의 초기값.
2. 상태 변경 함수:
   - `dispatch({ type: "액션_타입", data/targetId })` 형태로 상태 변경 요청.
3. 상태 변경 로직:
   - `reducer`에서 `switch-case`로 액션에 따른 상태 변화 정의.

---
