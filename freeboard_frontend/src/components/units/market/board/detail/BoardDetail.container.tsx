import { useQuery } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import MarketBoardDetailUI from './BoardDetail.presenter'
import { FETCH_BOARD } from './BoardDetail.queries'



export default function MarketBoardDetail() {
  const router = useRouter()
  
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      useditemId: router.query.boardId,
    },
  });
  const onClickMoveEdit = () => {
    router.push(`/market/${router.query.boardId}/edit`)
  }
  const onClickMoveList = () => {
    router.push('/market/list')
  }

  
  return (
    <MarketBoardDetailUI
      data={data}
      onClickMoveList={onClickMoveList}
      onClickMoveEdit={onClickMoveEdit}
    />
  );
}