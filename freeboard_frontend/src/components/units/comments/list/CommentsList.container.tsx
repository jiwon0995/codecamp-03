import CommentsListUI from './CommentsList.presenter'
import { FETCH_COMMENTS } from './CommentsList.queried';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';

export default function CommentsList() {
	const router = useRouter()
	const { data } = useQuery(FETCH_COMMENTS, {
		variables: {boardId: router.query.detail}
	});
	
	
	return <CommentsListUI data={data} />
}
