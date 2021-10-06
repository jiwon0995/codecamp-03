import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { WrapperWrapper } from '../write/BordWrite.styles';
import { v4 as uuidv4 } from 'uuid';
import {
	TableTop,
	Wrapper,
	Row,
	ColumnHeaderBasic,
	ColumnHeaderTitle,
	ColumnBasic,
	ColumnTitle,
	TopSearch,
	TopInput,
	SearchDate,
	SearchButton2,
	Pagenation,
	PageWrapper,
	PageWrapperWrapper,
	Myword,
	MywordWrapper,
} from './BoardList.styles';
// import { FETCH_BOARDS } from './BoardList.queries';

export default function BoardListUI(props: any) {
	// const [startPage, setStartPage] = useState(1);
	// const { data, refetch } = useQuery(FETCH_BOARDS, {
	// 	variables: {page:startPage},
	// })
	// function onClickPage(event) {
	// 	refetch({page:Number(event.target.id)})
	// }
	// function onClickNextPage() {
	// 	setStartPage(prev=>prev+10)
	// }
	// function onClickPrevPage() {
	// 	setStartPage((prev) => prev - 10);
	// }

	return (
		<WrapperWrapper>
			<Wrapper>
				<TopInput>
					<TopSearch
						onChange={props.onChangeSearch}
						type="text"
						placeholder="제목을 검색해주세요."
					></TopSearch>
					<SearchDate
						type="text"
						placeholder="YYYY.MM.DD - YYYY.MM.DD"
					></SearchDate>
					<SearchButton2 onClick={props.onClickSearch}>검색하기</SearchButton2>
				</TopInput>
				<TableTop>
					<Row>
						<ColumnHeaderBasic>번호</ColumnHeaderBasic>
						<ColumnHeaderTitle>제목</ColumnHeaderTitle>
						<ColumnHeaderBasic>작성자</ColumnHeaderBasic>
						<ColumnHeaderBasic>날짜</ColumnHeaderBasic>
					</Row>
				</TableTop>
				{props.data?.fetchBoards.map((el: any, index: any) => (
					<Row key={el._id} id={el._id} onClick={props.onClickMoveDetail}>
						<ColumnBasic>{10 - index}</ColumnBasic>
						<ColumnTitle>
							{/* <MywordWrapper> */}
							{el.title
								.replaceAll(props.search, `#@${props.search}#@`)
								.split('#@')
								.map((el: any) => (
									<Myword key={uuidv4()} isMatched={props.search === el}>
										{el}
									</Myword>
								))}
							{/* </MywordWrapper> */}
						</ColumnTitle>
						<ColumnBasic>{el.writer}</ColumnBasic>
						<ColumnBasic>{el.createdAt.slice(0, 10)}</ColumnBasic>
					</Row>
				))}
				<PageWrapperWrapper>
					<LeftOutlined
						style={{ color: '#ffffff' }}
						onClick={props.onClickPrevPage}
					/>
					<PageWrapper>
						{Array(10)
							.fill(1)
							.map((_, index) => (
								<Pagenation
									key={props.startPage + index}
									onClick={props.onClickPage}
									id={String(props.startPage + index)}
								>
									{props.startPage + index}
								</Pagenation>
							))}
					</PageWrapper>
					<RightOutlined
						style={{ color: '#ffffff' }}
						onClick={props.onClickNextPage}
					/>
				</PageWrapperWrapper>
				<div>
					<button onClick={props.onClickNewBoard}>게시물 등록하기</button>
				</div>
			</Wrapper>
		</WrapperWrapper>
	);
}
