import { useState } from "react"

export default function StatePrevPage() {

  const[count,setCounst] = useState(0)
  function onClickButton() { 
    setCounst((dldldldldl) => {
      return dldldldldl + 1
    })
  }
  
  
  return (
    <>
      <div>{count}</div>
      <button onClick={onClickButton}>+1</button>
    </>
  )
}