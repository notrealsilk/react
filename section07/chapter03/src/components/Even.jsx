import { useEffect } from "react"

const Even = () => {
  useEffect(() => {
    // 클린업, 정리함수 (useEffect가 끝나야 실행
    return () => {
      console.log("Even 컴포넌트 언마운트")
    }
  }, [])
  return <div>짝수가 되</div>
}

export default Even
