import { useState } from 'react'
import {Wrapper, Top, WrapperBody, WrapperLogo, LogoImg, LogoText, EmailBox, EmailInput, Rectangle,Error, PasswordBox, LoginButton, InfoBox, InfoText, Infoline,KakaoButton, ErrorText} from "../../../styles/02-state-login-css"


export default function stateLogin() { 
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  function OnChangeEmail(event) {
    setEmail(event.target.value)
  }

  function OnChangePassword(event) { 
    setPassword(event.target.value)
  }
  
  function OnClickSignup() {

    if (!email.includes("@")) {
      setEmailError("이메일 주소를 다시 확인해 주십시오")
    }

    if (password.length < 9) { 
      setPasswordError("8~16자의 영문,숫자,특수 문자만 사용 가능합니다.")
    }

  }
  
  
  
  return (
    <Wrapper>
      <Top></Top>
      <WrapperBody>
        <WrapperLogo>
          <LogoImg><img src="/logo.svg" /></LogoImg>
          <LogoText>잇츠로드</LogoText>
        </WrapperLogo>
        <EmailBox>
          <EmailInput onChange={OnChangeEmail} type="text" />
          {/* <img src="/X.svg" /> */} 
          <Rectangle></Rectangle>
          <ErrorText>{emailError}</ErrorText>
        </EmailBox>
        <PasswordBox>
          <EmailInput onChange={OnChangePassword} type="password" />
          <Rectangle></Rectangle>
          <ErrorText>{passwordError}</ErrorText>
        </PasswordBox>
        <LoginButton onClick={OnClickSignup}>로그인</LoginButton>
        <InfoBox>
          <InfoText>이메일 찾기</InfoText>
          <Infoline></Infoline>
          <InfoText>비밀번호 찾기</InfoText>
          <Infoline></Infoline>
          <InfoText>회원가입</InfoText>
        </InfoBox>
        <KakaoButton>카카오톡으로 로그인</KakaoButton>
      </WrapperBody>

    </Wrapper>  



  )

}