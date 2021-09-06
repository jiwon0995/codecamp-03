import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import BoardDetailUI from '../detail/BoardDetail.precenter'
import { FETCH_BOARD } from '../detail/BoardDetail.queries'

export default function BoardDetailContainer() { 
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.detail }
  })

  return (
    <BoardDetailUI
      router={router}
      data={data}
    />)
}