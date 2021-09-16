import { WrapperWrapper } from '../../board/write/BordWrite.styles';
import { InputWrapper, Wrapper4, Input, ContentsWrapper, Contents, BottomWrapper, ContentsLength, Button, pencil, Star } from './BoardCommentWrite.styles'

export default function BoardCommentWriteUI(props) { 
	return (
		<WrapperWrapper>
			<Wrapper4>
				{!props.isEdit && (
					<>
					<img src="/pencil.png" />
					<span>댓글</span>
					</>
				)}
				<InputWrapper>
					<Input placeholder="작성자"
						onChange={props.onChangeWriter}
						readOnly={Boolean(props.el?.writer)}
						defaultValue={props.el?.writer}
					/>
					<Input
						type="password"
						placeholder="비밀번호"
						onChange={props.onChangePassword}
					/>
					<Star onChange={props.onChangeStar} />
				</InputWrapper>
				<ContentsWrapper>
					<Contents
						placeholder="개인정보어쩌구"
						onChange={props.onChangeContents}
					/>

					<BottomWrapper>
						<ContentsLength>0/100</ContentsLength>
						<Button
							id={props.el?._id}
							onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}>
							{props.isEdit ? "수정하기" : "등록하기"}
						</Button>
					</BottomWrapper>
				</ContentsWrapper>
			</Wrapper4>
		</WrapperWrapper>
	);
}