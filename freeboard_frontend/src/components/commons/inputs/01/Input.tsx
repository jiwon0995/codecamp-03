import styled from '@emotion/styled'

const InputWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyInput = styled.input`
  width: 200px;
  font-family: "myfont";
  background-color: white;
`;

export const Label = styled.div`
  font-size: 20px;
  font-family: "myfont";
  width: 80px;
`;

export default function Input01(props:any) { 

  return (
  <>
      <Label>{props.name}</Label>
      <MyInput type={props.type} {...props.register} />
  </>
  );
}