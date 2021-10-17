import styled from '@emotion/styled'



export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #008080;
`

export const BoxWrapper = styled.div`
  width: 750px;
  height: 550px;
  margin-top: 100px;
  background-color: #d3f705;
  box-shadow: 6px 6px 8px #444;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 3px solid #fff;
  border-top: 3px solid #fff;
  border-right: 3px solid #7f7f7f;
  border-bottom: 3px solid #7f7f7f;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  width: 100%;
  padding: 0px 10px;

`
export const TopText = styled.div`
  font-size: 12px;
  /* margin-left: 8px; */
  text-align: center;
  line-height: 15px;
  font-weight: 200;
  font-family: 'myfont';

`
export const Body = styled.div`
  width: 750px;
  height: 400px;
  /* box-shadow: inset 0 0 0 1px gray; */
  background-color: lightgray;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  border-left: 3px solid #fff;
  border-right: 3px solid #7f7f7f;
`
export const SideImg = styled.div`
  height: 100%;
  width: 180px;
  background-color: #d3f705;
  box-shadow: inset 0 0 0 1px gray;
`
export const Signup = styled.button`
  width: 120px;
  height: 35px;
  cursor: pointer;
  margin: 30px 10px 0px 10px;
  font-family: 'myfont';
`
export const InputWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  
`;

export const Title = styled.div`
  font-family: "myfont";
  font-weight: bold;
  font-size: 25px;
  padding-bottom: 20px;

`
export const Contents = styled.div`
  margin-left: 40px;
`
export const Error = styled.div`
  font-size: 15px;
  color: red;
  padding-left: 10px;
  font-family: "myfont";
`

export const Error2 = styled.div`
  font-size: 8px;
  font-weight: 200;
  color: #010081;
  font-family: "myfontko";
  padding-left: 10px;
`
export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ModalImage = styled.img`
  width: 50px;
  height: auto;
`
export const ModalContents = styled.div`
  font-size: 12px;
  font-family: "myfontko";
  text-align: center;
  padding: 15px 0px 15px 0px;
  color: white;
`
export const ModalButton = styled.button`
  font-family: "myfont";
  font-size: 15px;
  background-color: #d3f705;
`
export const LoginTitle = styled.div`
  font-family: "myfont";
  font-size: 25px;
  padding-bottom: 30px;
  text-align: center;
`
export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const CoinIcon = styled.img`
  width: 100px;
  height: auto;
  display: block;
  padding-top: 30px;
`
export const LoginInput = styled.input`
  font-family: 'myfont';
  margin-bottom: 30px;
`
export const Logintext = styled.span`
  font-family: 'myfont';
  margin-right: 15px;
  font-size: 18px;
`
