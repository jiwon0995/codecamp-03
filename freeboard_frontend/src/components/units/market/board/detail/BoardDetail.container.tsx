import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import { IMutation, IMutationCreatePointTransactionOfBuyingAndSellingArgs, IMutationDeleteUseditemArgs, IMutationToggleUseditemPickArgs, IQuery, IQueryFetchUseditemArgs } from '../../../../../commons/types/generated/types';
import CommentWrite from '../../comment/write/commentWrit';
import MarketBoardDetailUI from './BoardDetail.presenter'
import {
  FETCH_BOARD,
  DELETE_USEDITEM,
  USEDITEM_PICK,
  ITEM_BUYING_AND_SELLING,
} from "./BoardDetail.queries";
import CommnetListPage from '../../comment/list/commentList.container'
import { useContext } from 'react';
import {GlobalContext } from '../../../../../../pages/_app'


export default function MarketBoardDetail() {
  const router = useRouter()
  const { userInfo }:any = useContext(GlobalContext)
  
  console.log("detail", userInfo)

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
    >(DELETE_USEDITEM);
  const [toggleUseditemPick] = useMutation<Pick<IMutation, "toggleUseditemPick">, IMutationToggleUseditemPickArgs>
    (USEDITEM_PICK);
  const [createPointTransactionOfBuyingAndSelling] = useMutation<Pick<IMutation,"createPointTransactionOfBuyingAndSelling">,IMutationCreatePointTransactionOfBuyingAndSellingArgs>(
    ITEM_BUYING_AND_SELLING
  );
  const { data } = useQuery<Pick<IQuery, "fetchUseditem">,IQueryFetchUseditemArgs>(FETCH_BOARD, {
    variables: {
      useditemId: String(router.query.boardId),
    },
  });
  console.log("fetch", data)
  
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

  } 
  console.log("u", userInfo)

  const onClickBuyItem = () => {
    try { 
      createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: String(router.query.boardId),
        },
      });
      alert("구매 완료!");
      router.push("/market/list")
    } catch (error) {console.log(error.message) }
    
  }

  return (
    <>
      <MarketBoardDetailUI
        data={data}
        onClickMoveList={onClickMoveList}
        onClickMoveEdit={onClickMoveEdit}
        onClickDeleteUseditem={onClickDeleteUseditem}
        onCLickUseditemPick={onCLickUseditemPick}
        userInfo={userInfo}
        onClickBuyItem={onClickBuyItem}
      />
      <CommentWrite />
      <CommnetListPage />
    </>
  );
}