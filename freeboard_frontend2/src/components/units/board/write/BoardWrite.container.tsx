import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import { IMyUpdateBoardInput } from './BoardWrite.types';
import { Youtube } from './BordWrite.styles';

export default function BoardWrite(props) {
	const router = useRouter();
	//입력값 state에 저장, 빈문자열로 초기화
	const [writer, setWriter] = useState('');
	const [password, setPassword] = useState('');
	const [title, setTitle] = useState('');
	const [contents, setContents] = useState('');
	const [youtubeUrl, setYoutubeUrl] = useState('');
	//에러메세지 state에 저장
	const [writerError, setWriterError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [titleError, setTitleError] = useState('');
	const [contentsError, setContentsError] = useState('');
	//등록하기 버튼 조건에 맞으면 버튼 색 변화주기
	const [isActive, setIsActive] = useState(false);
	//mutation으로 createBoard하기
	          //함수 사용할 떄는 createBoard(variables)
	const [createBoard] = useMutation(CREATE_BOARD);
	const [updateBoard] = useMutation(UPDATE_BOARD);
	//onchange함수
	function onChangeWriter(event) {
		setWriter(event.target.value);
		//작성자에 값이 들어오면 에러메세지가 빈문열로 바뀜
		if (event.target.value !== '') {
			setWriterError('');
		}
		if (
			event.target.value !== '' &&
			password !== '' &&
			title !== '' &&
			contents !== ''
		) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}
	function onChangePassword(event) {
		setPassword(event.target.value);
		if (event.target.value !== '') {
			setPasswordError('');
		}
		if (
			event.target.value !== '' &&
			writer !== '' &&
			title !== '' &&
			contents !== ''
		) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}
	function onChangeTitle(event) {
		setTitle(event.target.value);
		if (event.target.value !== '') {
			setTitleError('');
		}
		if (
			event.target.value !== '' &&
			writer !== '' &&
			password !== '' &&
			contents !== ''
		) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}
	function onChangeContents(event) {
		setContents(event.target.value);
		if (event.target.value !== '') {
			setContentsError('');
		}
		if (
			event.target.value !== '' &&
			writer !== '' &&
			password !== '' &&
			title !== ''
		) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}
	function onChangeYoutubeUrl(event) { 
		setYoutubeUrl(event.target.value)
	}
	//등록버튼 함수
	async function onClickSubmit() {
		if (writer === '') {
			setWriterError('작성자를 입력해주세요.');
		}
		if (password === '') {
			setPasswordError('비밀번호를 입력해주세요.');
		}
		if (title === '') {
			setTitleError('제목을 입력해주세요.');
		}
		if (contents === '') {
			setContentsError('내용을 입력해주세요.');
		}
		if (writer !== '' && password !== '' && title !== '' && contents !== '') {
			try {
				const result = await createBoard({
					variables: {
						createBoardInput: {
							writer: writer,
							title: title,
							contents: contents,
							password: password,
							youtubeUrl: youtubeUrl,
						},
					},
				});
				router.push(`/boards/${result.data.createBoard._id}`);
			} catch (error) {
				console.log(error);
			}    
		}
	}

	async function onClickUpdate() {
		if (
			!title &&
			!contents &&
			!youtubeUrl ) {
			alert("수정된 내용이 없습니다.")
			return
		}
		const myUpdateboardIuput: IMyUpdateBoardInput = {}
		if (title) myUpdateboardIuput.title = title
		if (contents) myUpdateboardIuput.contents = contents;
		if (youtubeUrl) myUpdateboardIuput.youtubeUrl = youtubeUrl;
		try { 
			const result = await updateBoard({
				variables: {
					boardId: router.query.boardId,
					password: password,
					updateBoardInput: myUpdateboardIuput,
				},
			});
			router.push(`/boards/${result.data.updateBoard._id}`);
		} catch (error) { 
			alert(error.message)
		}
	}

	return (
		<BoardWriteUI
			onChangeWriter={onChangeWriter}
			onChangePassword={onChangePassword}
			onChangeTitle={onChangeTitle}
			onChangeContents={onChangeContents}
			onClickSubmit={onClickSubmit}
			writerError={writerError}
			passwordError={passwordError}
			titleError={titleError}
			contentsError={contentsError}
			isActive={isActive}
			isEdit={props.isEdit}
			onClickUpdate={onClickUpdate}
			data={props.data}
			onChangeYoutubeUrl={onChangeYoutubeUrl}
		/>
	);
}
