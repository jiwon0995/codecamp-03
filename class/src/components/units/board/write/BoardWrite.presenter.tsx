import { MyButton, Title } from './BoardWrite.styles'

export default function BoardWriteUI(props) {

  return (
    <>
      <h1>{props.isEdit ? "수정페이지" : "등록페이지"}</h1>
      {/* <Title qqq={props.qqq}>컨테이너 프리젠터 패턴!!</Title> */}
      작성자 : <input type="text" onChange={props.onChangeMywriter} defaultValue={props.data?.fetchBoard.writer} /><br /><br />
      제목 : <input type="text" onChange={props.onChangeMytitle} defaultValue={props.data?.fetchBoard.title} /><br /><br />
      내용 : <input type="text" onChange={props.onChangeMycontents} defaultValue={props.data?.fetchBoard.contents} /><br /><br />
      {!props.isEdit && <MyButton onClick={props.aaa} qqq={props.qqq}>등록하기</MyButton>}
      {props.isEdit && <MyButton onClick={props.onClickEdit} qqq={props.qqq}>수정하기</MyButton>}
    </>
  )
}