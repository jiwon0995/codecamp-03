import {
  CloseSquareOutlined,
  MinusSquareOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import styled from '@emotion/styled'

export const BoardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #008080;
`
export const ContentsWrapper = styled.div`
  width: 1200px;
  height: 1847px;
  padding: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px gray;
  margin: 100px;
  background-color: #d3f705;
  border: 2px solid lightgray;
`

export const ContentsBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightgray;
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

