import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import BoardListUI from './BoardList.precenter'
import {FETCH_BOARDS} from './BoardList.queries'
export default function BoardList() { 
  const router = useRouter()
  // const { data } = useQuery(FETCH_BOARDS)
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
		variables: { page: startPage },
  });
  
  
  function onClickPage(event) {
		refetch({ page: Number(event.target.id) });
    
  }
	function onClickNextPage() {
		setStartPage((prev) => prev + 10);
	}
	function onClickPrevPage() {
		setStartPage((prev) => prev - 10);
	}


  function onClickMoveDetail(event) { 
    router.push(`/boards/${event.currentTarget.id}`)
	}
	
	function onClickNewBoard() {
		router.push("/boards/new")
	}
  return (
		<>
			<BoardListUI
				data={data}
				onClickMoveDetail={onClickMoveDetail}
				onClickPage={onClickPage}
				onClickNextPage={onClickNextPage}
				onClickPrevPage={onClickPrevPage}
				startPage={startPage}
				onClickNewBoard={onClickNewBoard}
			/>
		</>
	);
}