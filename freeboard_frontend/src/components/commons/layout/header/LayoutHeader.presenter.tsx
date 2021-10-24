import {
  Logo,
  Nav,
  Wrapper,
  Font,
  FontWrapper,
  Font2,
  LogoWrapper,
  LogoText,
  ProfileImg,
  ProfileName,
  Login,
  PointDiv,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props: any) {
  
  return (
    <Wrapper>
      <Nav>
        <div style={{ width: "600px", display: "flex" }}>
          <LogoWrapper>
            <Logo src="/windowslogo.png" id="/boards.main" />
            <LogoText>Start</LogoText>
          </LogoWrapper>
          <FontWrapper>
            <Font id="/boards/list" onClick={props.onClickMove}>
              자유게시판
            </Font>
            <Font id="/market/list" onClick={props.onClickMove}>
              중고마켓
            </Font>
            <Font>마이페이지</Font>
            <Font id="/boards/publicAPI" onClick={props.onClickMove}>
              API
            </Font>
          </FontWrapper>
        </div>
        <div style={{ display: "flex", alignItems:"center" }}>
          {props.data?.fetchUserLoggedIn.picture ? (
            <ProfileImg>{props.data?.fetchUserLoggedIn.picture}</ProfileImg>
          ) : (
            <ProfileImg src="/msagent.png"></ProfileImg>
          )}

          {props.data?.fetchUserLoggedIn.name ? (
            <ProfileName>{props.data?.fetchUserLoggedIn.name} 님</ProfileName>
          ) : (
            <ProfileName>알수없음 님</ProfileName>
          )}
          {props.accessToken ? (
            <Login onClick={props.onClickLogout}>로그아웃</Login>
          ) : (
            <Login onClick={props.onClickLogin}>로그인</Login>
          )}
          {props.data?.fetchUserLoggedIn.userPoint?.amount ? (
            <ProfileName>{props.data?.fetchUserLoggedIn.userPoint.amount} point </ProfileName>
            ) : (
            <ProfileName>0 point </ProfileName>
            )}
          <PointDiv>Point 충전하기</PointDiv>
          </div>
      </Nav>
    </Wrapper>
  );
}
