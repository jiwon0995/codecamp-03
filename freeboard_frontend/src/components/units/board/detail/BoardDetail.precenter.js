import {
  WriterWrapper,
  Wrapper,
  ProfileBox,
  InputBox,
  YoutubeBox,
  Writer,
  Title,
  WriterBox,
  WriteDay,
  ContentsBox,
  BottomWrapper,
  Button
  } from '../detail/BoardDetail.styles'

export default function BoardDetailUI(props) {
  
  return (
    <Wrapper>
      <WriterWrapper>
        <ProfileBox>
          <img src="/profile.png"></img>
          <WriterBox>
            <Writer>{props.data?.fetchBoard.writer}</Writer>
            <WriteDay>Date:2021.02.18</WriteDay>
          </WriterBox>
        </ProfileBox>
        <div>
          <img src="/link.png"></img>
          <img src="/location.png"></img>
        </div>
      </WriterWrapper>
      <InputBox>
        <Title>{props.data?.fetchBorad.title}</Title>
      </InputBox>
      <InputBox>
        <img src="/image.png"></img>
        <ContentsBox>{props.data?.fetchBorad.contents}</ContentsBox>
      </InputBox>
      <InputBox>
        <YoutubeBox><img src="/video.png"></img></YoutubeBox>
      </InputBox>
      <BottomWrapper>
        <Button>목록으로</Button>
        <Button>수정하기</Button>
        <Button onClick={props.onClickBoard}>삭제하기</Button>
      </BottomWrapper>
  </Wrapper>      
  )
}