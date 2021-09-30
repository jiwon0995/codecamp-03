import {  WrapperWrapper } from '../write/BordWrite.styles';
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
	Youtube,
	IconWrapper,
	LinkIcon,
	LocationIcon,
	ImageDetail,
	ImageWrapper2,
} from './BoardDetail.styles';
import { Tooltip } from 'antd';

export default function BoardDetailUI(props:any) { 
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
						<IconWrapper>
							<LinkIcon src="/link.png"></LinkIcon>
							<Tooltip
								placement="topRight"
								title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
							>
								<LocationIcon src="/location.png" />
							</Tooltip>
						</IconWrapper>
					</Header>
					<Body>
						<Title2>{props.data?.fetchBoard.title}</Title2>
						<ImageWrapper2>
							{props.data?.fetchBoard.images
								?.filter((el:any) => el !== '')
								.map((el:any) => (
									<ImageDetail
										key={el}
										src={`https://storage.googleapis.com/${el}`}
									/>
								))}
						</ImageWrapper2>
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