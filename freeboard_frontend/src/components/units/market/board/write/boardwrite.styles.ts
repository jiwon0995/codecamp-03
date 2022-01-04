import {
  CloseSquareOutlined,
  MinusSquareOutlined,
} from "@ant-design/icons";
import styled from '@emotion/styled'
import "react-quill/dist/quill.snow.css"; // reactQuill CSS

// import ReactQuill from 'react-quill' 프론트엔트 서버에서 그릴 때, document가 없어서 분제가 됨
// 넥스트js = 서버사이드랜더링
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const BoardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #008080;
`
export const ContentsWrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  padding: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px gray;
  margin: 100px;
  background-color: #d3f705;
  /* border: 2px solid lightgray; */
  box-shadow: 0 0 15px #333;
  border-left: 3px solid #fff;
  border-top: 3px solid #fff;
  border-right: 3px solid #7f7f7f;
  
`

export const ContentsBox = styled.div`
  width: 1200px;
  height: 100%;
  background-color: #c6c6c6;
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 3px solid #fff;
  border-right: 3px solid #7f7f7f;
  border-bottom: 3px solid #7f7f7f;
`
export const Title = styled.div`
  font-family: "myfont";
  font-size: 18px;
`
export const TopBar = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`
export const IconX = styled(CloseSquareOutlined)`
  font-size: 23px;
  color: black;
  background-color: lightgray;
`
export const IconY = styled(MinusSquareOutlined)`
  font-size: 23px;
  color: black;
  background-color: lightgray;
`
export const ProductBox = styled.textarea`
  width: 996px;
  height: 400px;
  padding: 20px 20px;
  font-family: "myfontko";
  background-color: white;
  border: 1px solid gray;
`
export const Label = styled.div`
  padding-top: 40px;
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'myfont';
  `

export const ImgBox = styled.div`
  width: 180px;
  height: 180px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "myfont";
  margin-right: 20px;
  cursor: pointer;
`
export const ImgWrapper = styled.div`
  display: flex;
`
export const Img = styled.div`
  width: 996px;
`
export const RadioWrpper = styled.div`
  width: 996px;
  
`
export const RadioButton = styled.input`
  cursor: pointer;
`
export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
  font-family: 'myfont';
`
export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  font-family: 'myfont';
  font-size: 20px;
  background-color: #d3f705;
  cursor: pointer;
`
export const ErrorMessage = styled.div`
  margin-top: 5px;
  color: red;
  font-family: 'myfontko';
`
export const ReactQuillStyled = styled(ReactQuill)`
  width: 996px;
  height: 320px;
  background-color: white;
  font-family: "myfontko";
  border: 1px solid gray;
  padding-bottom : 40px;

`
export const AddressInput = styled.input`
  width: 588px;
  height: 52px;
  margin: 10px 0px;
`;
