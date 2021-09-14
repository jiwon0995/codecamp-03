import { useState } from "react"

export default function StatePrevPage() {
  const [count,setCount] = useState(0)

  function onClickCount() {
    // setCount(count + 1)
    // setCount(count + 1);
    // setCount(count + 1);
    //이전값을 가져와서 사용
    setCount(prev => prev + 1)
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    
  }
  return (
    <div>
      <div>현재카운트 : {count}</div>
      <button onClick={onClickCount}>count 증가!</button>
    </div>
  )
}