import styled from '@emotion/styled'

export const InputWrapper = styled.div`
  padding-top: 40px;
  /* background-color: bisque; */
`
export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'myfont';
`
export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid gray;
  font-family: "myfontko";
`

export default function Input02(props:any) { 

  return (
    <InputWrapper>
      <Label>{props.name}</Label>
      <Subject type="text" placeholder={`${props.name}을/를 입력해주세요`}></Subject>
    </InputWrapper>
  )
}