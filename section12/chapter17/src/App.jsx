import "./App.css";
import {
  useReducer,
  useRef,
  createContext,
  useEffect,
  useState,
} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

// 웹스토리지에 데이터를 저장하므로 mockData 더이상 필요 없음

function reducer(state, action) {
  // 웹스토리지 데이터 저장
  let nextState; // 새로운 state를 만들어 줄 변수

  switch (action.type) {
    case "INIT":
      return action.data; // 초기값
      // Init은 초기값을 설정해주는 것이기 때문에  nextState에서 값 불러오지않고 바로 return을 해주어야 함
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id)
          ? action.data
          : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter(
        (item) => String(item.id) !== String(action.id)
      );
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태
  const [data, dispatch] = useReducer(reducer, []); // 빈 배열
  const idRef = useRef(0); // 초기값 0으로 바꾸기

  // localStorage.setItem (저장할 데이터 키값(원시데이터), 실제 데이터 value 값)
  // 컴포넌트가 최초로 Mount 될 때 실행
  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    //  저장된 데이터가 없으면 종료 (parse는 null이면 오류가 나기 때문에 설정)
    if (!storedData) {
      setIsLoading(false);
      return;
    }
    // 일기 데이터를 배열로 변환
    const parsedData = JSON.parse(storedData);
    // 배열이 아니면 종료
    if (!Array.isArray(parsedData)) {
      setIsLoading(false); // 로딩 끝
      return;
    }

    // 가장 높은 id값을 찾아서 idRef에 저장 (idRef.current)
    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = item.id;
      }
    });

    // 기존 일기의 id값보다 1 큰 값을 idRef에 저장
    idRef.current = maxId + 1;

    dispatch({
      type: "INIT", // 초기화
      data: parsedData,
    });
    setIsLoading(false);
  }, []);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  // 로딩중 일 때 실행
  // 로딩이 완료되야 아래 컴포넌트들 렌더링
  if (isLoading) {
    return <div>데이터 로딩중입니다 ...</div>;
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
