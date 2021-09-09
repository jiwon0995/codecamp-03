import { useQuery } from '@apollo/client'
import { removeArgumentsFromDocument } from '@apollo/client/utilities'
import { useRouter } from 'next/router'
import BoardListUI from '../../board/list/BoardList.precenter'
import { FETCH_BOARDS } from '../../board/list/BoardList.queries'

export default function BoardListContainer() { 
  const { data } = useQuery(FETCH_BOARDS)
  const router = useRouter()
  
  function onClickCreateBoard() { 
    router.push("/boards/new")
  }


  return (
    <BoardListUI
      data={data}
      onClickCreateBoard={onClickCreateBoard}
    />
  )
}