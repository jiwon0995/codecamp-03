import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import MarketBoardListUI from './boardlist.presenter'
import { FETCH_USED_ITEMS} from './boardlist.queries'

export default function MarketBoardList() { 
  const router = useRouter()
  const { data } = useQuery(FETCH_USED_ITEMS)
  console.log(data)
  const onClickMoveBoardWrite = (e) =>
  { router.push('/market/new') }
  
  
  
  
  return <MarketBoardListUI
    onClickMoveBoardWrite={onClickMoveBoardWrite}
    data={data}
  />;
}