import { MyButton, Title } from './BoardWrite.styles'

export default function BoardWriteUI(props) {

  return (
    <>
      <Title qqq={props.qqq}>컨테이너 프리젠터 패턴!!</Title>
      작성자 : <input type="text" onChange={props.onChangeMywriter} /><br /><br />
      제목 : <input type="text" onChange={props.onChangeMytitle} /><br /><br />
      내용 : <input type="text" onChange={props.onChangeMycontents} /><br /><br />
      <MyButton onClick={props.aaa} qqq={props.qqq}>GRAPHQL-API 요청하기!</MyButton>
    
    </>
  )
}