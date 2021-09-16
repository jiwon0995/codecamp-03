import BoardCommentListUIItem from './BoardCommentList.presenteritem'

export default function BoardCommentListUI(props) { 
  return (
		<>
			{props.data?.fetchBoardComments.map((el) => (
				<BoardCommentListUIItem key={el._id} el={el} />
			))}
		</>
	);
}