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
  box-shadow: 0px 8px 12px #333;
  margin: 100px;
  background-color: #d3f705;
  border: 2px solid lightgray;
  border-left: 3px solid #fff;
  border-top: 3px solid #fff;
  border-right: 3px solid #7f7f7f;
  border-bottom: 3px solid #7f7f7f;
`
export const Selling = styled.div`
  display: flex;
  margin-right: 690px;
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
  height: 700px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Window = styled.div`
  position: relative;
  top: 300px;
  left: 80px;
  z-index: 1;
  font-family: 'myfont';
  color: white;
  background-color: #008080;
  height: 60px;
  width: 60px;
`
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const WindowIcon = styled.img`
  display: block;
  cursor: pointer;
  height: 60px;
  width: 60px;
`
export const KingWrapper = styled.div`
  background-color: #008080;
`
export const MapWrapper = styled.div`
  width: 930px;
  height: 600px;
  padding: 15px 15px;
  border-left: 3px solid #fff;
  border-top: 3px solid #fff;
  border-right: 3px solid #7f7f7f;
  border-bottom: 3px solid #7f7f7f;
  overflow: scroll;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  line-height: 80px;
  /* border-bottom: 1px solid gray; */
  border: 1px solid lightgray;
  /* border-image: linear-gradient(to top,  #555, #bbb, #eee); */
  border-image-slice: 1;
  color: gray;
  background-color: white;
  cursor: pointer; 
`
export const ColumnBasic = styled.div`
  width: 149px;
  text-align: center;
  font-family: 'myfontko';
`;
export const ColumnImg = styled.img`
  height: 78px;
  width: 78px;
`
export const ImgX = styled.div`
  width: 78px;
  background-color: #d3f705;
  font-family: 'myfont';
  text-align: center;
`
export const ListTitle = styled.div`
  font-family: "myfont";
  font-size: 18px;
  width: 100%;
  height: 25px;
  line-height: 20px;
`
export const SearchBar = styled.input`
  font-family: 'myfontko';
  height: 40px;
  width: 870px;
`
export const SearchDiv = styled.div`
  display: flex;
`
export const Search = styled.div`
width: 60px;
height: 40px;
font-family: 'myfont';
font-weight: 500;
font-size: 15px;
border: 1px solid gray;
text-align: center;
line-height: 40px;
border-left: 3px solid #fff;
border-top: 3px solid #fff;
border-right: 3px solid #7f7f7f;
`
export const Soldout = styled.div`
width: 60px;
height: 40px;
font-family: 'myfont';
font-weight: 500;
font-size: 15px;
border: 1px solid gray;
text-align: center;
line-height: 40px;
border-left: 3px solid #fff;
border-top: 3px solid #fff;
border-right: 3px solid #7f7f7f;
cursor: pointer;
:hover{
  background-color: #d3f705;
}
`