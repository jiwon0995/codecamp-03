import styled from '@emotion/styled'
import {
  CloseSquareOutlined,
  MinusSquareOutlined,
  SmileOutlined,
} from "@ant-design/icons";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #008080;
`

export const ListBody = styled.div`
  width: 1000px;
  /* height: 700px; */
  box-shadow: 0px 0px 10px gray;
  margin: 100px;
  background-color: #d3f705;
  border: 2px solid lightgray;
`
export const ListTop = styled.div`
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
export const Title = styled.div`
  font-family: "myfont";
  font-size: 18px;
`
export const Body = styled.div`
  width: 100%;
  height: 668px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Window = styled.div`
  position: relative;
  top: 30px;
  left: 60px;
  z-index: 1;
  font-family: 'myfont';
  background-color: #008080;
`
export const WindowIcon = styled.img`
  display: block;
  cursor: pointer;
  
`
export const KingWrapper = styled.div`
  background-color: #008080;
`
export const MapWrapper = styled.div`
  width: 800px;
  /* background-color: white; */
  
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  /* border-bottom: 1px solid gray; */
  border: 1px solid gray;
  /* border-image: linear-gradient(to top,  #555, #bbb, #eee); */
  border-image-slice: 1;
  color: gray;
  cursor: pointer;
  margin-top:5px;
`
export const ColumnBasic = styled.div`
  width: 20%;
  text-align: center;
  font-family: 'myfontko';
`;