export default function HofPage() {
  
  function onClickFunction(e) {
    alert(`${e.target.id}번째 입니다.`)
  }

  const onClickFunction2 = (index) => () => {
  
    alert(`${index}번째 입니다.`)
    
  }

  return (
    <>
      <div>HOF 연습 페이지입니다</div>
      {["철수", "영희", "훈이"].map((el, index) => (
        <div onClick={onClickFunction2(index)}>{el}입니다.</div>
      ))}
    </>
  );
}