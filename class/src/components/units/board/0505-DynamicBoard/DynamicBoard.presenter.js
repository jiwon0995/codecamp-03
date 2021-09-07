export default function DynamicBoardUI(props) { 


  return (
    <>
      작성자 : <input type="text" onChange={props.onChangeMywriter} /><br /><br />
      제목 : <input type="text" onChange={props.onChangeMytitle} /><br /><br />
      내용 : <input type="text" onChange={props.onChangeMycontents} /><br /><br />
      {/* 버튼 클릭하면 함수 aaa작동  */}
      <button onClick={props.aaa}>GRAPHQL-API 요청하기!</button>
    </>

  )
}