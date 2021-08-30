import { Divider } from "antd";
import { MyDiv, Title, IdInput, PasswordInput, LoginButton, Wrapper } from '../../styles/Example'

export default function EmotionPage() {



  // return 위쪽은 javascript쓰는 곳
  // return 아래는 html쓰는 곳
  return (
    <Wrapper>
      <Title>로그인 화면</Title>
      아이디 : <IdInput type="text"></IdInput><br />
      비밀번호 : <PasswordInput type="password"></PasswordInput><br />
      <LoginButton>로그인</LoginButton>
      <img src="/lotto.png"></img>
      {/* <MyDiv>안녕하세요</MyDiv> */}
    </Wrapper>

  )
}