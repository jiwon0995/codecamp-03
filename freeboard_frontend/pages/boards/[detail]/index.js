import {
  WriterWrapper,
  Wrapper,
  ProfileBox,
  InputBox,
  Contents,
  YoutubeBox,
  Writer,
  Title,
  WriterBox,
  WriteDay
} from "../../../../styles/detailPageCss"
import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"


export default function BoardsDetailPage() { 
  const router = useRouter()
  const { } = useQuery(FETCH_BOARD, {
    variables: {}
  })
  return (
    <Wrapper>
      <WriterWrapper>
        <ProfileBox>
          <img src="/profile.png"></img>
            <WriterBox>    
              <Writer>노원두</Writer>
              <WriteDay>Dtae:2021.02.18</WriteDay>
            </WriterBox>
        </ProfileBox>
        <div>
          <img src="/link.png"></img>
          <img src="/location.png"></img>
        </div>
      </WriterWrapper>
      <InputBox>
        <Title>게시글 제목입니다.</Title>
      </InputBox>
      <InputBox>
        <img src="/image.png"></img>
        <Contents>contents</Contents>
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