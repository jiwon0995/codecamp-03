import styled from '@emotion/styled'

interface IsActive {
  isActive: boolean
}
interface IsEdit {
  isEdit: boolean;
}
export const WrapperWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  width: 1200px;
  height: 1847px;
  padding: 60px 103px 100px 103px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px gray;
  margin: 100px;
`
export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
`
export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  /* background-color: aqua; */
`
export const InputWrapper = styled.div`
  padding-top: 40px;
  /* background-color: bisque; */
`
export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  /* background-color: aliceblue; */
`
export const Writer = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`
export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`
export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`
export const Contents = styled.textarea`
  width: 996px;
	height: 480px;
	padding-left: 16px;
	padding: 14px;
	border: 1px solid #bdbdbd;
`
export const ZipcodeWrapper = styled.div`
  display: flex;
	flex-direction: row;
`
export const Zipcode = styled.input`
  width: 77px;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`
export const SearchButton = styled.button`
  width: 124px;
	height: 52px;
	margin-left: 16px;
	background-color: black;
  cursor: pointer;
  color: white;
`
export const Address = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`
export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`
export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`
export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`
export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`
export const RadioButton = styled.input`
  cursor: pointer;
`
export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;


export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: ${(props)=>props.isActive?"pointer":"default"};
  background-color: ${(props: IsActive) => props.isActive ? "yellow" : 'gray'};
`
export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`