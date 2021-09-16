import { WrapperWrapper } from '../write/BordWrite.styles';
import {
  CardWrapper,
  Wrapper2,
  Header,
  AvatarWrapper,
  Avatar,
  Info,
  CreatedAt,
  Body,
  Title2,
  Contents2,
  BottomWrapper,
  Button,
  Writer2,
	Youtube

} from './BoardDetail.styles'


export default function BoardDetailUI(props) { 
	return (
		<WrapperWrapper>
			<Wrapper2>
				<CardWrapper>
					<Header>
						<AvatarWrapper>
							<Avatar src="/profile.png" />
							<Info>
								<Writer2>{props.data?.fetchBoard.writer}</Writer2>
								<CreatedAt>
									Date : {props.data?.fetchBoard.createdAt.slice(0, 10)}
								</CreatedAt>
							</Info>
						</AvatarWrapper>
					</Header>
					<Body>
						<Title2>{props.data?.fetchBoard.title}</Title2>
						<Contents2>{props.data?.fetchBoard.contents}</Contents2>
						<Youtube
							url={props.data?.fetchBoard.youtubeUrl}
							width="486px"
							height="240px"
						></Youtube>
					</Body>
				</CardWrapper>
				<BottomWrapper>
					<Button onClick={props.onClickMoveList}>목록으로</Button>
					<Button onClick={props.onClickMoveEdit}>수정하기</Button>
					<Button onClick={props.onClickDelete}>삭제하기</Button>
				</BottomWrapper>
			</Wrapper2>
		</WrapperWrapper>
	);
}