import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import BoardDetailUI from '../detail/BoardDetail.precenter'
import { FETCH_BOARD, DELETE_BOARD } from '../detail/BoardDetail.queries'

export default function BoardDetailContainer() { 
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.detail }
  })
  const [deleteBoard] = useMutation(DELETE_BOARD)
  
  //board 삭제 
  async function onClickBoard(event) { 
    await deleteBoard({
      variables: { boardId: router.query.detail },
      refetchQueries: [{ query: FETCH_BOARD }]
    })
  }
  return (
    <BoardDetailUI
      router={router}
      data={data}
      onClickBoard={onClickBoard}
    />
  )
}