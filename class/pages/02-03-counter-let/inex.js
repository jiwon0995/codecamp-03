export default function counterLetPage() {

  function aaa() {
    let count = Number(document.getElementById("number").innerText) + 1
    document.getElementById("number").innerText = count
  }

  return (
    <> //fragment
      <div id="number">0</div>
      <butoon onClick={aaa}>카운트 증가</butoon>
    </>
  )


}