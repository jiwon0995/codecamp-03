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
export const PageWrapper = styled.div`
  width: 760px;
  /* height: 1200px; */
  margin: 100px 0px;
  background-color: #d3f705;
  border: 2px solid lightgray;
  box-shadow: 0px 10px 20px #333;
`
export const MapWrapper = styled.div`
  width: 350px;
  height: 250px;
  margin-top: 150px;
  margin-left: 50px;
  background-color: #d3f705;
  border: 2px solid lightgray;
  box-shadow: 0px 10px 20px #333;
`
export const ContentsWrapper = styled.div`
  width: 758px;
  background-color: lightgray;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const MapContentsWrapper = styled.div`
  width: 348px;
  background-color: lightgray;
  /* padding: 20px 20px; */
  height: 218px;
`
export const TopBar = styled.div`
  width: 100%;
  height: 30px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Name = styled.span`
  margin-left: 15px;
  font-family: 'myfontko';
  font-size: 15px;

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
export const IconSmile = styled(SmileOutlined)`
  font-size: 23px;
  color: black;
  /* background-color: lightgray; */
`
export const ContentsBody = styled.div`
  border-top: 2px gray dotted;
  /* height: 250px; */
  width: 100%;
  /* background-color: blue; */
  margin-top: 30px;
  padding: 50px 50px;
`
export const ProfileWrpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px;
  border: 2px solid;
  border-image: linear-gradient(to top,  #555, #bbb, #eee);
  border-image-slice: 1;
  font-family: 'myfontko';
  margin-bottom: 20px;
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const Writer = styled.div`
  font-size: 25px;
  font-family: "myfont";
`
export const Date = styled.div`
  font-size: 15px;
  font-family: 'myfontko';
`
export const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  background-color: #008080;
  border-radius: 100%;
  margin-right: 30px;
  background-image: url('/profile.png');
  background-repeat: no-repeat;
  background-size: cover;
`
export const Price = styled.div`
  font-size: 30px;
  font-family: 'myfont';
`
export const Wrp = styled.div`
  display: flex;

`
export const Text = styled.div`
  display: flex;
`
export const PriceWrapper = styled.div`
  width: 200px;
  height: 52px;
  /* padding: 15px 15px; */
  border: 2px solid;
  border-image: linear-gradient(to top,  #555, #bbb, #eee);
  border-image-slice: 1;
  font-family: 'myfontko';
  margin-bottom: 20px;
  font-size: 22px;
  text-align: center;
  line-height: 52px;
  /* margin-left: 450px; */
`

