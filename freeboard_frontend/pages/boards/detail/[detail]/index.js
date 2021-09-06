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
  ContentsBox
} from "../../../../styles/detailPageCss"
import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
  query fetchBoard($boardId:ID!){
    fetchBoard(boardId:$boardId){
      writer
      title
      contents
    }
  }
`
export default function BoardsDetailPage() { 
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.detail}
  })
  return (
    <Wrapper>
      <WriterWrapper>
        <ProfileBox>
          <img src="/profile.png"></img>
            <WriterBox>    
            <Writer>{data?.fetchBoard.writer}</Writer>
              <WriteDay>Dtae:2021.02.18</WriteDay>
            </WriterBox>
        </ProfileBox>
        <div>
          <img src="/link.png"></img>
          <img src="/location.png"></img>
        </div>
      </WriterWrapper>
      <InputBox>
        <Title>{data?.fetchBoard.title}</Title>
      </InputBox>
      <InputBox>
        <img src="/image.png"></img>
        <ContentsBox>{data?.fetchBoard.contents}</ContentsBox>
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