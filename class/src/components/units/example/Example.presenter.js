export default function ExampleUI(props) { 
  return (
    <>
      {/* <div>00페이지</div> */}
      <div>{props.isEdit ? "수정페이지":"등록페이지"}</div>
      제목: <input type="text" /><br />
      제목: <input type="text" />
      <button>{props.isEdit  ? "수정하기":"등록하기"}</button>
    </>
  )
}