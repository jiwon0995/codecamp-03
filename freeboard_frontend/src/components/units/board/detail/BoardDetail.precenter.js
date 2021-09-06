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
  ContentsBox } from '../detail/BoardDetail.styles'

export default function BoardDetailUI(props) { 
  
  return (
    <Wrapper>
      <WriterWrapper>
        <ProfileBox>
          <img src="/profile.png"></img>
          <WriterBox>
            <Writer>{props.data && props.data.fetchBoard.writer}</Writer>
            <WriteDay>Date:2021.02.18</WriteDay>
          </WriterBox>
        </ProfileBox>
        <div>
          <img src="/link.png"></img>
          <img src="/location.png"></img>
        </div>
      </WriterWrapper>
      <InputBox>
        <Title>{props.data && props.data.fetchBoard.title}</Title>
      </InputBox>
      <InputBox>
        <img src="/image.png"></img>
        <ContentsBox>{props.data && props.data.fetchBoard.contents}</ContentsBox>
      </InputBox>
      <InputBox>
        <YoutubeBox><img src="/video.png"></img></YoutubeBox>
      </InputBox>
      {/* <LikeHateBox>
        <LikeHate>
          <img src="/like.png"></img>
          <div>1920</div>
        </LikeHate>  
        <LikeHate>
          <img src="/hate.png"></img>
          <div>1920</div>
        </LikeHate>
      </LikeHateBox> */}
    </Wrapper>    
  )
}