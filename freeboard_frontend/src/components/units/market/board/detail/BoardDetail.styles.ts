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
  background-color: #c6c6c6;
  border: 2px solid lightgray;
  box-shadow: 0px 10px 20px #333;
  border-left: 3px solid #fff;
  border-top: 3px solid #fff;
  border-right: 3px solid #7f7f7f;
  border-bottom: 3px solid #7f7f7f;
`
export const MapWrapper = styled.div`
  width: 350px;
  height: 250px;
  margin-top: 150px;
  margin-left: 50px;
  background-color: #c6c6c6;
  border: 2px solid lightgray;
  box-shadow: 0px 10px 20px #333;
  border-left: 3px solid #fff;
  border-top: 3px solid #fff;
  border-right: 3px solid #7f7f7f;
  border-bottom: 3px solid #7f7f7f;
`
export const ContentsWrapper = styled.div`
  width: 758px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const MapContentsWrapper = styled.div`
  width: 100%;
  /* background-color: lightgray; */
  /* padding: 20px 20px; */
  height: 100%;
`
export const TopBar = styled.div`
  width: 100%;
  height: 30px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d3f705;
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
  border-left: 3px solid #fff;
  border-top: 3px solid #fff;
  border-right: 3px solid #7f7f7f;
  border-bottom: 3px solid #7f7f7f;
  font-family: 'myfontko';
  margin-bottom: 20px;
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between;
  width: 100%; */
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
  font-family: 'myfontko';
  margin-bottom: 20px;
  font-size: 22px;
  /* text-align: center; */
  line-height: 52px;
  border-left: 3px solid #fff;
  border-top: 3px solid #fff;
  border-right: 3px solid #7f7f7f;
  border-bottom: 3px solid #7f7f7f;
  display: flex;
  align-items: center;
`
export const SliderImg = styled.img`
  width: 250px;
  height: 250px;
  margin: 0px auto;
`
export const PicDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Label = styled.div`
  font-family: 'myfont';
  font-size: 20px;
  margin-bottom: 8px;
`
