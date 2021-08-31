import { Wrapper, Top, Clock, Header, Search, Profile, Body, Group, Title, Title1, Title2, Nav, NavGroup, NavText, NavTextRed, Header1, Header2, HeaderTitle, HeaderProfile, HeaderImage, HeaderName, Header3, Header3Text, Header3TextRed, Image } from '../../../styles/quizcss'

export default function FaqPage() {
  // return 위쪽은 javascript쓰는 곳
  // return 아래는 html쓰는 곳
  return (
    <Wrapper>
      <Top>
        <Clock>12:30</Clock>
      </Top>
      <Header>
        <Header1>
          <Search src="/search.svg"></Search>
        </Header1>
        <Header2>
          <HeaderTitle>마이</HeaderTitle>
          <HeaderProfile>
            <HeaderImage src="/profileImage.png"></HeaderImage>
            <HeaderName>임정아</HeaderName>
            <Image src="/profile.svg"></Image>
          </HeaderProfile>
        </Header2>
        <Header3>
          <Header3Text>공지사항</Header3Text>
          <Header3Text>이벤트</Header3Text>
          <Header3TextRed>FAQ</Header3TextRed>
          <Header3Text>Q&amp;A</Header3Text>
        </Header3>
          
        
      </Header>
      <Body>
        <Group>
          <Title>
            <Title1>Q. 01</Title1>
            <Title2>리뷰 작성은 어떻게 하나요?</Title2>
          </Title>
          <Image src="/button.svg"></Image>
        </Group>
        <Group>
          <Title>
            <Title1>Q. 02</Title1>
            <Title2>리뷰 수정/삭제는 어떻게 하나요?</Title2>
          </Title>
          <Image src="/button.svg"></Image>
        </Group>
        <Group>
          <Title>
            <Title1>Q. 03</Title1>
            <Title2>아이디/비밀번호를 잊어버렸어요.</Title2>
          </Title>
          <Image src="/button.svg"></Image>
        </Group>
        <Group>
          <Title>
            <Title1>Q. 04</Title1>
            <Title2>회원탈퇴를 하고싶어요.</Title2>
          </Title>
          <Image src="/button.svg"></Image>
        </Group>
        <Group>
          <Title>
            <Title1>Q. 05</Title1>
            <Title2>출발지 설정은 어떻게 하나요?</Title2>
          </Title>
          <Image src="/button.svg"></Image>
        </Group>
        <Group>
          <Title>
            <Title1>Q. 06</Title1>
            <Title2>비밀번호를 변경하고 싶어요.</Title2>
          </Title>
          <Image src="/button.svg"></Image>
        </Group>
      </Body>
      <Nav>
        <NavGroup>
          <Image src="/home.svg"></Image>
          <NavText>홈</NavText>
        </NavGroup>
        <NavGroup>
          <Image src="/gps.svg"></Image>
          <NavText>잇츠로드</NavText>
        </NavGroup>
        <NavGroup>
          <Image src="/like.svg"></Image>
          <NavText>마이찜</NavText>
        </NavGroup>
        <NavGroup>
          <Image src="/my.svg"></Image>
          <NavTextRed>마이</NavTextRed>
        </NavGroup>
        
      </Nav>
    </Wrapper>

  )
}