// 리액트 라우터 라이브러리 설정

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom" // 라우터 라이브러리 불러오기

// BrowserRouter로 앱 컴포넌트로 감싸기 -> 모든 컴포넌트에서 라우터 사용 가능
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
