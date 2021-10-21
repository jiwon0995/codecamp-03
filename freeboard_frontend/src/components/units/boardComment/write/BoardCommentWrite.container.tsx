import { useMutation } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import BoardCommentWriteUI from './BoardCommentWrite.presenter';
import {
	CREATE_COMMENT,
	UPDATE_BOARD_COMMENT,
} from './BoardCommentWrite.queried';
import { FETCH_BOARD_COMMENTS } from '../list/BoardCommentList.queries';
import { IMutation, IMutationUpdateBoardCommentArgs } from '../../../../commons/types/generated/types';


export default function BoardCommentWrite(props) {
	
	const router = useRouter();
	const [createBoardComment] = useMutation(CREATE_COMMENT);
	const [updateBoardComment] = useMutation <
		Pick < IMutation,"updateBoardComment" >,
		IMutationUpdateBoardCommentArgs>(UPDATE_BOARD_COMMENT)
	
	const [writer, setWriter] = useState('');
	const [password, setPassword] = useState('');
	const [contents, setContents] = useState('');
	const [Star, setStar] = useState(0);

	function onChangeWriter(event) {
		setWriter(event.target.value);
	}
	function onChangePassword(event) {
		setPassword(event.target.value);
	}
	function onChangeContents(event) {
		setContents(event.target.value);
	}
	function onChangeStar(value) {
		setStar(value);
	}

	async function onClickWrite() {
		try {
			await createBoardComment({
				variables: {
					boardId: router.query.boardId,
					createBoardCommentInput: {
						writer: writer,
						password: password,
						contents: contents,
						rating: Star,
					},
				},
				refetchQueries: [
					{
						query: FETCH_BOARD_COMMENTS,
						variables: { boardId: router.query.boardId },
					},
				],
			});
			console.log(router.query.boardId);
			// alert('댓글이 됨');
		} catch (error) {
			alert(error.message);
		}
	}

	async function onClickUpdate(event) {
		if (!contents) {
			alert('내용이 수정되지 않았습니다.');
			return;
		}
		if (!password) {
			alert('비밀번호가 입력되지 않았습니다.');
			return;
		}
		try { 
			await updateBoardComment({
				variables: {
					updateBoardCommentInput: { contents: contents, rating:Star },
					password: password,
					boardCommentId: event.target.id,
				},
				refetchQueries: [
					{
						query: FETCH_BOARD_COMMENTS,
						variables: { boardId: router.query.boardId },
					},
				],
			});
			props.setIsEdit?.(false);
		} catch (error) { 
			alert(error.messege)
		}
	}

	
	return (
		<>
			<BoardCommentWriteUI
				onChangeWriter={onChangeWriter}
				onChangePassword={onChangePassword}
				onChangeContents={onChangeContents}
				onClickWrite={onClickWrite}
				onChangeStar={onChangeStar}
				el={props.el}
				onClickUpdate={onClickUpdate}
				isEdit={props.isEdit}
				contents={contents}
			/>
		</>
	);
}
