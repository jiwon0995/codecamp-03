import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD = gql`
  query fetchBoard($number:Int){
    fetchBoard(number:$number){
      writer
      title
      contents
    }
  }
`


export default function DynamicBoardRead() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) } //number패이지가 열리자마자 요청이 들어간다.
  })
  console.log(data)

  return (
    <>
      <div>게시물 상세 페이지 입니다.</div>
      <div>게시글 번호: {router.query.number}</div>
      {/* 삼항연산자보다 실무에서는 &&연산자를 더 많이 씁니당 */}
      {/* 원래 &&연산자는 옵셔널체이닝으로 줄여쓴다. data && data -> data?.로 줄여서 사용 */}
      <div>게시글 작성자: {data?.fetchBoard.writer}</div>
      <div>게시글 제목: {data?.fetchBoard.title}</div>
      <div>게시글 내용: {data?.fetchBoard.contents}</div>
      {/* <div>게시글 작성자: {data ? data.fetchBoard.writer : "loading..."}</div> 
      <div>게시글 제목: {data ? data.fetchBoard.title : "loading..."}</div>
      <div>게시글 내용: {data ? data.fetchBoard.contents : "loading..."}</div> */}
    </>
  )
}