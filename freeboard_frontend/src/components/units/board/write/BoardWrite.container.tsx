import { useMutation } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import { ChangeEvent, useState } from 'react';
// import { ICreateBoardInput, IMutation } from '../../../../commons/types/generated/types';
import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import { IMyUpdateBoardInput,IMyCreateBoardInput } from './BoardWrite.types';


export default function BoardWrite(props:any) {
	const router = useRouter();
	// 입력값 state에 저장, 빈문자열로 초기화
	const [writer, setWriter] = useState('');
	const [password, setPassword] = useState('');
	const [title, setTitle] = useState('');
	const [contents, setContents] = useState('');
	const [youtubeUrl, setYoutubeUrl] = useState('');
	const [address, setAddress] = useState('')
	const [zipcode, setZipcode] = useState('')
	const [addressDetail, setAddressDetail] = useState('')
	const [fileUrls, setFileUrls] = useState(['','',''])
	// 에러메세지 state에 저장
	const [writerError, setWriterError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [titleError, setTitleError] = useState('');
	const [contentsError, setContentsError] = useState('');
	// 등록하기 버튼 조건에 맞으면 버튼 색 변화주기
	const [isActive, setIsActive] = useState(false);
	const [isOpen, setIsOpen] = useState(false)
	// mutation으로 createBoard하기
	// 함수 사용할 떄는 createBoard(variables)
	const [createBoard] = useMutation(CREATE_BOARD);
	const [updateBoard] = useMutation(UPDATE_BOARD);
	// onchange함수
	function onChangeWriter(event:any) {
		setWriter(event.target.value);
		// 작성자에 값이 들어오면 에러메세지가 빈문열로 바뀜
		if (event.target.value !== '') {
			setWriterError('');
		}
		// 모든 내용이 입력됐는지 확인
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
	function onChangePassword(event:any) {
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
	function onChangeTitle(event:any) {
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
	function onChangeContents(event:any) {
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
		function onChangeYoutubeUrl(event: ChangeEvent<HTMLInputElement>) {
			setYoutubeUrl(event.target.value)
		}
		function onChangeAddressDetail(event: any) {
			setAddressDetail(event.target.value)
		}
		// 우편번호 검색 버튼을 누르면 모달창이 열리게하는 함수
		function onClickAddressSearch() {
			setIsOpen(true)
		}
		// 다음 주소 검색에서 나온 데이터 저장하는 함수
		// 라이브러리에서 제공하는 타입이 없을 경우 any로 해준다
		function onCompleteAddressSearch(data: any) {
			setAddress(data.address)
			setZipcode(data.zonecode)
			// 모달종료
			setIsOpen(false)
		}
		// 등록버튼 함수

		// 타입스크립트 지정해주기
		const mycreateBoardInput: IMyCreateBoardInput = {
			writer,
			title,
			contents,
			youtubeUrl,
			password,
			boardAddress: {
				zipcode,
				address,
				addressDetail,
			},
			images: [...fileUrls]
			
		};

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
							createBoardInput: mycreateBoardInput,
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
				!youtubeUrl &&
				!zipcode &&
				!address &&
				!addressDetail
			) {
				alert('수정된 내용이 없습니다.');
				return;
			}
			// 바뀐것만 추가해서 채우기
			const myUpdateboardIuput: IMyUpdateBoardInput = {}
			if (title) myUpdateboardIuput.title = title
			if (contents) myUpdateboardIuput.contents = contents;
			if (youtubeUrl) myUpdateboardIuput.youtubeUrl = youtubeUrl;
			if (zipcode || address || addressDetail) {
				myUpdateboardIuput.boardAddress = {};
				if (zipcode) myUpdateboardIuput.boardAddress.zipcode = zipcode;
				if (address) myUpdateboardIuput.boardAddress.address = address;
				if (addressDetail)
					myUpdateboardIuput.boardAddress.addressDetail = addressDetail;
			}
	
			try {
				const result = await updateBoard({
					variables: {
						boardId: router.query.boardId,
						password: password,
						updateBoardInput: myUpdateboardIuput, // 바뀐것만 보내기
					},
				});
				router.push(`/boards/${result.data.updateBoard._id}`);
			} catch (error) {
				alert(error.message)
			}
		}
		
	function onChangeFileUrls(fileUrl: string, index: number) { 
		const newFileUrls = [...fileUrls]
		newFileUrls[index] = fileUrl
		setFileUrls(newFileUrls)
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
				onClickAddressSearch={onClickAddressSearch}
				isOpen={isOpen}
				onChangeAddressDetail={onChangeAddressDetail}
				onCompleteAddressSearch={onCompleteAddressSearch}
				address={address}
				zipcode={zipcode}
				onChangeFileUrls={onChangeFileUrls}
				fileUrls={fileUrls}
			/>
		);
}
