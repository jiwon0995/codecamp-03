import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { WrapperWrapper } from '../write/BordWrite.styles';
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
} from './BoardList.styles';
// import { FETCH_BOARDS } from './BoardList.queries';

export default function BoardListUI(props:any) { 
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
					<TopSearch type="text" placeholder="제목을 검색해주세요."></TopSearch>
					<SearchDate
						type="text"
						placeholder="YYYY.MM.DD - YYYY.MM.DD"
					></SearchDate>
					<SearchButton2>검색하기</SearchButton2>
				</TopInput>
				<TableTop>
					<Row>
						<ColumnHeaderBasic>번호</ColumnHeaderBasic>
						<ColumnHeaderTitle>제목</ColumnHeaderTitle>
						<ColumnHeaderBasic>작성자</ColumnHeaderBasic>
						<ColumnHeaderBasic>날짜</ColumnHeaderBasic>
					</Row>
				</TableTop>
				{props.data?.fetchBoards.map((el:any, index:any) => (
					<Row key={el._id} id={el._id} onClick={props.onClickMoveDetail}>
						<ColumnBasic>{10 - index}</ColumnBasic>
						<ColumnTitle>{el.title}</ColumnTitle>
						<ColumnBasic>{el.writer}</ColumnBasic>
						<ColumnBasic>{el.createdAt.slice(0, 10)}</ColumnBasic>
					</Row>
				))}
				<PageWrapperWrapper>
					<LeftOutlined onClick={props.onClickPrevPage} />
					<PageWrapper>
						{new Array(10).fill(1).map((_, index) => (
							<Pagenation
								key={props.startPage + index}
								onClick={props.onClickPage}
								id={String(props.startPage + index)}
							>
								{props.startPage + index}
							</Pagenation>
						))}
					</PageWrapper>
					<RightOutlined onClick={props.onClickNextPage} />
				</PageWrapperWrapper>
				<div>
					<button onClick={props.onClickNewBoard}>게시물 등록하기</button>
				</div>
			</Wrapper>
		</WrapperWrapper>
	);
}