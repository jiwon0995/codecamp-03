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
  console.log(data)
  


  return <MarketBoardDetailUI data={data} />;
}