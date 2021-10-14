import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import DOMPurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId:ID!){
    fetchBoard(boardId:$boardId){
      writer
      title
      contents
    }
  }
`
export default function WebEditerDetailPage() { 
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD,
    {
      variables: {
        boardId: router.query.Id
      }
    })
  return (
    <>
      <div>writer:{data?.fetchBoard.writer}</div>
      <div>title:{data?.fetchBoard.title}</div>
      <div>
        contents:
        {/* {typeof window !== "undefined" && (
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.fetchBoard.contents),
            }}
          />
        )} */}
        {process.browser && (
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.fetchBoard.contents),
            }}
          />
        )}
      </div>
    </>
  );
}