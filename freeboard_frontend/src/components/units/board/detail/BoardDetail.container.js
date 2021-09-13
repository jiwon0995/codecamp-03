import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import BoardDetailUI from '../detail/BoardDetail.precenter'
import { FETCH_BOARD, DELETE_BOARD } from '../detail/BoardDetail.queries'
import CommentsWrite from '../../../../components/units/comments/write/Commentswrite.container'
import CommentsListPage from '../../../../../pages/comments/list/index'

export default function BoardDetailContainer() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.detail }
  })
  const [deleteBoard] = useMutation(DELETE_BOARD)

  //board 삭제 
  async function onClickBoard() {
    try {
      await deleteBoard({
        variables: { boardId: router.query.detail }
        // refetchQueries: [{ query: FETCH_BOARD }]
      })
      alert("게시물이 삭제되었습니다.")
      router.push("/boards/list")
    } catch (error) {
      alert(error.message)
    }
  }

  //board update
  function onClickMoveEdit() {
    router.push(`/boards/detail/${router.query.detail}/edit`)
  }

  function onClickList() {
    router.push("/boards/list")
  }

  return (
    <>
      <BoardDetailUI
        router={router}
        data={data}
        onClickBoard={onClickBoard}
        onClickList={onClickList}
        onClickMoveEdit={onClickMoveEdit}
      />
      <CommentsWrite />
      <CommentsListPage />
    </>
  )

}
