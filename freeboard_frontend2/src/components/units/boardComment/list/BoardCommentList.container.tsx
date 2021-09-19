import { useQuery } from '@apollo/client'
import { useRouter } from 'next/dist/client/router'
import { IQuery, IQueryFetchBoardCommentsArgs } from '../../../../commons/types/generated/types'
import BoardCommentListUI from './BoardCommentList.presenter'
import { FETCH_BOARD_COMMENTS } from './BoardCommentList.queries'


export default function BoardCommentList() {
  const router = useRouter()
  const { data, fetchMore } = useQuery<Pick<IQuery,"fetchBoardComments">,IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS,{
    variables: {boardId: String(router.query.boardId)}
  })


  function onLodeMore() { 
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => { 
        return {
					fetchBoardComments: [
						...prev.fetchBoardComments,
						...fetchMoreResult.fetchBoardComments,
					],
				};
      }
    })
  }
  return <BoardCommentListUI data={data} onLodeMore={onLodeMore} />;
}
