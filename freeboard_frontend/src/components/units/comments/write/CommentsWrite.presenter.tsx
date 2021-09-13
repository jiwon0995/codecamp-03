import {
	Title,
	Wrapper,
	Text,
	Star,
	CommentsBox,
	Comments,
	CommentsBottom,
	CommentsButton,
	InputBox,
	Input,
} from './CommentsWrite.styles';

export default function CommentsWriteUI(props) {
	return (
	
			<Wrapper>
				<Title>
					<img src="/comments.png" />
					<Text>댓글</Text>
				</Title>
				<InputBox>
					<Input
						type="text"
						placeholder="작성자"
						onChange={props.onchangeWriter}
					></Input>
					<Input
						type="password"
						placeholder="비밀번호"
						onChange={props.onChangPassword}
					></Input>
					<Star>
						<img src="/Star.png" />
						<img src="/Star.png" />
						<img src="/Star.png" />
						<img src="/Star.png" />
						<img src="/Star.png" />
					</Star>
				</InputBox>
				<CommentsBox>
					<Comments
						onChange={props.onChangeContents}
						placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 
            이에 대한 민형사상 책임은 게시자에게 있습니다."
					></Comments>
					<CommentsBottom>
						<CommentsButton onClick={props.onClikCreateComments}>
							등록하기
						</CommentsButton>
					</CommentsBottom>
				</CommentsBox>
			</Wrapper>
	
	);
}
