import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width:640px;
  height:1138px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  background-image: url(/pizza.jpg);
  margin: 50px 50px;
`

export const Top = styled.div`
  width:100%;
  height: 43px;
  /* background-color: lightseagreen; */
`
export const WrapperBody = styled.div`
  width: 100%;
  height: 1095px;
  padding: 0 49px 51px 83px;
  /* background-color: black; */
`
export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 181px;
`
export const LogoImg = styled.div`
  width: 100px;
  height: 100px;
  object-fit: contain;
`
export const LogoText = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: white;
`
export const EmailBox = styled.div`
  padding-top: 162px;
  width: 100%;
  /* height: 55px; */
  /* background-color: violet; */
`
export const EmailInput = styled.input`
  opacity: 0;
  width: 100%;
  height: 30px;
  color: white;
  
`
export const Rectangle = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff;
  opacity: 0.4;
  margin-top: 20px;
`
export const Error = styled.div`
  width: 100%;
  height: 20px;
  font-size: 18px;
  color: #ff1b6d;
  margin-top: 10px;
`
export const PasswordBox = styled.div`
  width: 100%;
  margin-top: 35px;
`
export const LoginButton = styled.button`
  width: 100%;
  height: 76px;
  border-radius: 40px;
  color: white;
  background-color: #ff1b6d;
  opacity: 0.6;
  font-size: 26px;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
`
export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 44px 50px 0px 50px;
`
export const Infoline = styled.div`
  width: 1px;
  height: 12px;
  background-color: white;
`
export const InfoText = styled.div`
  font-size: 20px;
  color: white;
  
`
export const KakaoButton = styled.button`
  width: 100%;
  height: 76px;
  border-radius: 40px;
  border: solid 2px #fae100;
  /* opacity: 100; */
  font-size: 26px;
  text-align: center;
  margin-top: 61px;
  background-color:transparent;
  color: #fae100;
`

export const ErrorText = styled.div`
  font-size: 18px;
  color: red;
  margin-top: 10px;
`