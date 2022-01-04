import styled from '@emotion/styled'
import { WrapperWrapper } from '../../../src/components/units/board/write/BordWrite.styles'

const CardWrapper = styled.div`
	width: 400px;
	height: 540px;
	background-color: #333333;
	margin: 30px;

`
const CardProfile = styled.div`
	width: 100%;
	height: 70px;
	padding: 20px;
	display: flex;
	align-items: center;
	/* background-color: green; */
`
const CardNamerWrapper = styled.div`
	padding-left: 10px;
`
const CardName = styled.div`
	font-size: 15px;
	font-weight: normal;
	color: white;
`
const CardSebName = styled.div`
	font-size: 11px;
	font-weight: 200;
	color: white;
`

const CardImg = styled.img`
	width: 100%;
	height: 350px;
	/* background-color: hotpink; */
`
const CardContents = styled.div`
	width: 100%;
	height: 120px;
	background-color: #333333;
	color : white;
	font-size: 15px;
	padding: 20px 20px 20px 20px;
	font-weight: 200;
	/* text-align: center; */
`
const CardTitle = styled.div`
	font-size: 25px;
	color: white;
	/* margin: 20px; */
	background-color: #000000;
	text-align: center;
	padding-top: 20px;


`

export default function CardPage() { 

	return (
		<>
		<CardTitle>CARD NEWS</CardTitle>
		<WrapperWrapper>
			<CardWrapper>
				<CardProfile>
					<img src="/profile.png" />
					<CardNamerWrapper>
						<CardName>A bee hidden in a flower</CardName>
						<CardSebName>Nobember 5, 2020</CardSebName>
					</CardNamerWrapper>
				</CardProfile>
				<CardImg src="/bee.jpeg" />
				<CardContents>
					This bee is a picture I took. I had a really hard time filming it. It
					captured the moment. You guys try taking it too. The bee picture is
					cool.
				</CardContents>
			</CardWrapper>
			<CardWrapper>
				<CardProfile>
					<img src="/profile.png" />
					<CardNamerWrapper>
						<CardName>A bee hidden in a flower</CardName>
						<CardSebName>Nobember 5, 2020</CardSebName>
					</CardNamerWrapper>
				</CardProfile>
				<CardImg src="/bee.jpeg" />
				<CardContents>
					This bee is a picture I took. I had a really hard time filming it. It
					captured the moment. You guys try taking it too. The bee picture is
					cool.
				</CardContents>
			</CardWrapper>
			<CardWrapper>
				<CardProfile>
					<img src="/profile.png" />
					<CardNamerWrapper>
						<CardName>A bee hidden in a flower</CardName>
						<CardSebName>Nobember 5, 2020</CardSebName>
					</CardNamerWrapper>
				</CardProfile>
				<CardImg src="/bee.jpeg" />
				<CardContents>
					This bee is a picture I took. I had a really hard time filming it. It
					captured the moment. You guys try taking it too. The bee picture is
					cool.
				</CardContents>
			</CardWrapper>
			</WrapperWrapper>
			</>
	);
}