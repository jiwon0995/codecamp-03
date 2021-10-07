import styled from "@emotion/styled";
import { Iprops } from './Myform.types'

export const MyButton = styled.button`
  background-color: ${(props: Iprops) => (props.isValid ? "yellow" : "gray")};
`;
