import { WrapperWrapper } from '../../board/write/BordWrite.styles';
import { InputWrapper, Wrapper4, Input, ContentsWrapper, Contents, BottomWrapper, ContentsLength, Button, pencil, Star } from './BoardCommentWrite.styles'

export default function BoardCommentWriteUI(props:any) { 
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
					<Star onChange={props.onChangeStar}/>
				</InputWrapper>
				<ContentsWrapper>
					<Contents
						maxLength={100}
						placeholder="개인정보어쩌구"
						onChange={props.onChangeContents}
						defaultValue={props.el?.contents}
					/>

					<BottomWrapper>
						<ContentsLength>{props.contents.length}/100</ContentsLength>
						<Button
							// 각 아이다를 가져온다
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