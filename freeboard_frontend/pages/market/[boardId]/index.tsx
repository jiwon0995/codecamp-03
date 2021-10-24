import MarketBoardDetail from '../../../src/components/units/market/board/detail/BoardDetail.container'
import { withAuth } from "../../../src/components/commons/hocs/withAuth";

const MarketBoardDetailPage=()=> {
  
  return(<MarketBoardDetail />)
}

export default withAuth(MarketBoardDetailPage);