import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardListUI from '../../board/list/BoardList.precenter'
import { FETCH_BOARDS } from '../../board/list/BoardList.queries'

export default function BoardListContainer() {
  const { data } = useQuery(FETCH_BOARDS)
  const router = useRouter()

  function onClickCreateBoard() {
    router.push("/boards/new/")
  }
  function onClickDetailBoard(event) { 
    router.push(`/boards/detail/${event.target.id}`)
  }




  return (
    <BoardListUI
      data={data}
      onClickCreateBoard={onClickCreateBoard}
      onClickDetailBoard={onClickDetailBoard}
    />
  )
}