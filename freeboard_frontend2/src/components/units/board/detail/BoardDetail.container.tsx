import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/dist/client/router'
import BoardDetailUI from './BoardDetail.precenter'
import { FETCH_BOARD,DELETE_BOARD } from './BoardDetail.queries'

export default function BoardDetail() { 
  const router = useRouter()
  const [deleteBoard] = useMutation(DELETE_BOARD)

  const { data } = useQuery(FETCH_BOARD, {
    variables: {boardId:router.query.boardId}
  })
  async function onClickDelete() {
    try {
      await deleteBoard({
				variables: { boardId: router.query.boardId }
			}); console.log(router.query.boardId);
      alert("게시물이 삭제되었습니다.")
      router.push("/boards")
    }
    catch (eeror) {
      alert("eeror")
    }
  }
  function onClickMoveEdit() { 
    router.push(`/boards/${router.query.boardId}/edit`)
  }
  function onClickMoveList() { 
    router.push('/boards')
  }
    
  
  return (
		<>
			<BoardDetailUI
				data={data}
				onClickDelete={onClickDelete}
				onClickMoveEdit={onClickMoveEdit}
				onClickMoveList={onClickMoveList}
			/>
		</>
	);
}