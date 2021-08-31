export default function QuizLetCounter() {

  function CounterNumber() {
    let number = Number(document.getElementById("num").innerText) + 1
    document.getElementById("num").innerText=number
  
  }
  
  return (
    <>  
      <div id="num">0</div>
      <button onClick={CounterNumber}>카운트 올리기</button>
    </>
  )
}