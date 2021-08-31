export default function QuizLetHello() {


  function ClickHello() {
    document.getElementById("aaa").innerText = "반갑습니다."
  
  }


  return (
    <button id="aaa" onClick={ClickHello}>안녕하세요.</button>
  )

}