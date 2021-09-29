import { useState } from "react"

export default function counterStatePage() {
  // const[state이름, state저장도구 ] = useState("초기값")

  const [count, setCount] = useState(0)
  function onClickCount() {
    setCount(count + 1)
  }


  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCount}>카운트증가</button>
    </>
  )
}