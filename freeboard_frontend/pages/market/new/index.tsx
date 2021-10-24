import BoardWritePage from '../../../src/components/units/market/board/write/boardwrite.container'
import { withAuth } from "../../../src/components/commons/hocs/withAuth";


const BoardWrite = () => { 
  
  return <BoardWritePage isEdit={true} />;
}
export default withAuth(BoardWrite);