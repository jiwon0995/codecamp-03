import styled from '@emotion/styled'



export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

export const BoxWrapper = styled.div`
  width: 750px;
  height: 550px;
  background-color: #d3f705;
  padding: 0px 5px 5px 5px;
  box-shadow: 10px 10px 8px lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  width: 100%;

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
  width: 730px;
  background-color: white;
  height: 400px;
  box-shadow: inset 0 0 0 1px gray;
  background-color: lightgray;
  padding: 20px 20px;
  display: flex;
  align-items: center;
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
`
export const ModalButton = styled.button`
  font-family: "myfont";
  font-size: 12px;  
`