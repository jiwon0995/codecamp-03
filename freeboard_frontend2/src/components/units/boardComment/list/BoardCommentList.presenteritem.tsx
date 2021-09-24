import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import { WrapperWrapper } from '../../board/write/BordWrite.styles';
import {
	Avatar,
	FlexWrapper,
	ItemWrapper,
	MainWrapper,
	Writer5,
	Star2,
	WriterWrapper,
	Contents2,
	UpdateIcon,
	DeleteIcon,
	DateString,
	OptionWrapper9,
	PasswordInput,
} from './BoardCommentList.styles';
import BoardCommentWrite from '../write/BoardCommentWrite.container'
import { useMutation } from '@apollo/client';
import { IMutation, IMutationDeleteBoardCommentArgs } from '../../../../commons/types/generated/types';
import { DELET_BOARD_COMMNET, FETCH_BOARD_COMMENTS } from './BoardCommentList.queries'
import { Modal } from 'antd'

export default function BoardCommentListUIItem(props) { 
	const router = useRouter()
	const [isEdit, setIsEdit] = useState(false)
	const [deleteBoardComment] = useMutation <
		Pick < IMutation, "deleteBoardComment" >,
		IMutationDeleteBoardCommentArgs>(DELET_BOARD_COMMNET)
	const [password, setPassword] = useState("")
	const [isOpenDeleteModal, setisOpenDeleteModal] = useState(false)
	
	function onClickUpdate() { 
		setIsEdit(true)
	}
	function onClickOpenEleteModal() { 
		setisOpenDeleteModal(true)
	}
	function onChangeDeletePassword(event) {
    setPassword(event.target.value);
  }
	async function onClickDelete() { 
		try { 
				await deleteBoardComment({
					variables: {
						password: password,
						boardCommentId: props.el?._id,
					},
					refetchQueries: [
						{
							query: FETCH_BOARD_COMMENTS,
							variables: { boardId: router.query.boardId },
						},
					],
				});
		} catch (error) { 
			alert(error.message)
		}
		
	
	}
	
	
	return (
		<>
			{isOpenDeleteModal && (
				<Modal visible={true} onOk={onClickDelete}>
					<div>비밀번호 입력: </div>
					<PasswordInput
						type="password"
						onChange={onChangeDeletePassword}
					></PasswordInput>
				</Modal>
			)}
			{!isEdit && (
				<WrapperWrapper>
					<ItemWrapper>
						<FlexWrapper>
							<Avatar src="/profile.png" />
							<MainWrapper>
								<WriterWrapper>
									<Writer5>{props.el?.writer}</Writer5>
									<Star2 value={props.el?.rating} disabled />
								</WriterWrapper>
								<Contents2>{props.el?.contents}</Contents2>
							</MainWrapper>
							<OptionWrapper9>
								<UpdateIcon onClick={onClickUpdate} src="/write.png" />
								<DeleteIcon onClick={onClickOpenEleteModal} src="/delete.png" />
							</OptionWrapper9>
						</FlexWrapper>
						<DateString>{props.el?.createdAt.slice(0, 10)}</DateString>
					</ItemWrapper>
				</WrapperWrapper>
			)}
			{isEdit && (
				<BoardCommentWrite
					isEdit={isEdit}
					setIsEdit={setIsEdit}
					el={props.el}
				/>
			)}
		</>
	);
}