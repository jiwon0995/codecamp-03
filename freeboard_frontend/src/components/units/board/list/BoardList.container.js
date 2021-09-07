import { useQuery } from '@apollo/client'
import BoardListUI from '../../board/list/BoardList.precenter'
import { FETCH_BOARDS } from '../../board/list/BoardList.queries'

export default function BoardListContainer() { 
  const { data } = useQuery(FETCH_BOARDS)
  
  return (
    <BoardListUI
      data={data}
    />
  )
}