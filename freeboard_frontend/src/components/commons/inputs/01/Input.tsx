import styled from "@emotion/styled";

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

export default function Input01(props: any) {
  console.log(props);
  return (
    <>
      <Label>{props.name}</Label>
      <MyInput
        onChange={props.onChange}
        type={props.type}
        {...props.register}
      />
    </>
  );
}
