import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import { IMutation, IMutationDeleteUseditemArgs, IMutationToggleUseditemPickArgs, IQuery, IQueryFetchUseditemArgs } from '../../../../../commons/types/generated/types';
import CommentWrite from '../../comment/write/commentWrit';
import MarketBoardDetailUI from './BoardDetail.presenter'
import {
  FETCH_BOARD,
  DELETE_USEDITEM,
  USEDITEM_PICK,
} from "./BoardDetail.queries";
import CommnetListPage from '../../comment/list/commentList.container'
import { useContext } from 'react';
import {GlobalContext } from '../../../../../../pages/_app'


export default function MarketBoardDetail() {
  const router = useRouter()
  const { userInfo } = useContext(GlobalContext)


  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
    >(DELETE_USEDITEM);
  const [toggleUseditemPick] = useMutation<Pick<IMutation, "toggleUseditemPick">, IMutationToggleUseditemPickArgs>
    (USEDITEM_PICK);
  
  const { data } = useQuery<Pick<IQuery, "fetchUseditem">,IQueryFetchUseditemArgs>(FETCH_BOARD, {
    variables: {
      useditemId: String(router.query.boardId),
    },
  });
  console.log("fetch",data)
  const onClickMoveEdit = () => {
    router.push(`/market/${router.query.boardId}/edit`)
  }
  const onClickMoveList = () => {
    router.push('/market/list')
  }
  const onClickDeleteUseditem = async() => {
    try { 
      await deleteUseditem({
        variables: { useditemId: String(router.query.boardId) },
      });
      router.push('/market/list')
    } catch (error) {console.log(error.message) }
    
  }
  const onCLickUseditemPick = () => {
    toggleUseditemPick({
      variables: { useditemId: String(router.query.boardId) },
      refetchQueries: [{ query: FETCH_BOARD, variables: { useditemId: String(router.query.boardId) } }],
    });
console.log(router.query.boardId);
  } 
  console.log("u", userInfo)
  console.log("f",data?.fetchUseditem.seller?._id)
  return (
    <>
      <MarketBoardDetailUI
        data={data}
        onClickMoveList={onClickMoveList}
        onClickMoveEdit={onClickMoveEdit}
        onClickDeleteUseditem={onClickDeleteUseditem}
        onCLickUseditemPick={onCLickUseditemPick}
        userInfo={userInfo}
      />
      <CommentWrite />
      <CommnetListPage />
    </>
  );
}