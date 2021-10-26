import CommentListUIItem from './commentList.presenterItems'

export default function CommemtListUI(props:any) { 
  if (!props.data?.fetchUseditemQuestions.length) return <></>;

  return <>{props.data?.fetchUseditemQuestions.map((el:any) => (
    <CommentListUIItem key={el._id} el={el} />
  ))}</>;
}