import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router';
import { IQuery, IQueryFetchUseditemQuestionsArgs } from '../../../../../commons/types/generated/types';
import { FETCH_USEDITEM_QUESTIONS } from './commnetList.queries'
import CommemtListUI from './commentList.presenter'
import { useContext } from 'react';
import { GlobalContext } from '../../../../../../pages/_app';



export default function CommnetListPage() { 
  const router = useRouter()
  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchUseditemQuestions">, IQueryFetchUseditemQuestionsArgs>
    (FETCH_USEDITEM_QUESTIONS, { variables: {useditemId: String(router.query.boardId)}});
  const { userInfo }:any = useContext(GlobalContext)

  const onLodeMore =()=>{
    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1 },
      updateQuery: (prev:any, { fetchMoreResult }) => {
        return {
          fetchBoardComments: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult?.fetchUseditemQuestions,
          ],
        };
      },
    });

  }


  return (
    <CommemtListUI data={data} onLodeMore={onLodeMore} userInfo={userInfo} />
  );
}