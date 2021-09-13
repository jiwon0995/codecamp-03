import { useMutation } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import CommentsWriteUI from './CommentsWrite.presenter';
import { CREATE_COMMENT } from './CommentsWrite.queries';


export default function CommentsWrite() {
	const [createBoardComment] = useMutation(CREATE_COMMENT);
	const router = useRouter();

	const [writer, setWriter] = useState('');
	const [contents, setContents] = useState('');
	const [password, setPassword] = useState('');

	//onChange함수
	function onchangeWriter(event) {
		setWriter(event.target.value);
	}
	function onChangPassword(event) {
		setPassword(event.target.value);
	}
	function onChangeContents(event) {
		setContents(event.target.value);
	}

	console.log(router.query.detail);

	//등록하기 onClick함수
	async function onClikCreateComments() {
		const result = await createBoardComment({
			variables: {
				boardId: router.query.detail,
				createBoardCommentInput: {
					writer: writer,
					contents: contents,
					rating: 4,
				},
				// refetchQueries: [
				// 	{
				// 		query: FETCH_COMMENTS,
				// 		variables: { boardId: router.query.detail },
				// 	},
				// ],
			},
		});
	
		console.log(result);
	}

	return (
		<CommentsWriteUI
			onClikCreateComments={onClikCreateComments}
			onchangeWriter={onchangeWriter}
			onChangPassword={onChangPassword}
			onChangeContents={onChangeContents}
		/>
	);
}
