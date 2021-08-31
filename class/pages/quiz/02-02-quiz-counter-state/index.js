import { useState } from 'react'

export default function QuizCounterState() {

  const[number,setNumber] = useState(0)

  function CounterNumber() {
    setNumber(number + 1)
  }
  return (
    <>
      <div>{number}</div>
      <button onClick={CounterNumber}>카운터 올리기</button>
    </>
  )
}