import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/dist/client/router'
import BoardDetailUI from './BoardDetail.precenter'
import { FETCH_BOARD,DELETE_BOARD,LIKE_BOARD,DISLIKE_BOARD } from './BoardDetail.queries'

export default function BoardDetail() { 
  const router = useRouter()
  const [deleteBoard] = useMutation(DELETE_BOARD)
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD)

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

  function onClickLike() { 
    likeBoard({
			variables: { boardId: router.query.boardId },
			refetchQueries: [
				{ query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
			],
		});
  }

  function onClickDislike() { 
    dislikeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        { query: FETCH_BOARD, variables: {boardId:router.query.boardId}}
      ]
    })
  }
    
  
  return (
		<>
			<BoardDetailUI
        data={data}
        onClickDelete={onClickDelete}
        onClickMoveEdit={onClickMoveEdit}
        onClickMoveList={onClickMoveList}
        onClickLike={onClickLike}
        onClickDislike={onClickDislike}
			/>
		</>
	);
}