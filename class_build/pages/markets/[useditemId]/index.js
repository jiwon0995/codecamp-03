import Head from 'next/head';
import { gql, request } from 'graphql-request';

export default function MarketsPage(props) {
	
	
	return (
		<>
			<Head>
				<meta property="og:title" content={props.fetchUseditem.name} />
				<meta property="og:description" content={props.fetchUseditem.remarks} />
				<meta property="og:image" content={props.fetchUseditem.images[0]} />
			</Head>
			<div>마켓페이지 입니다.</div>
		</>
	);
}

const FETCH_USEDITEM = gql`
	query fetchUseditem($useditemId: ID!) {
		fetchUseditem(useditemId: $useditemId) {
			name
			remarks
			images
		}
	}
`;

export const getServerSideProps = async (context) => {
	// 1. graphql 데이터를 요청한다
	const result = await request(
		'https://backend03.codebootcamp.co.kr/graphql',
		FETCH_USEDITEM,
		{
			useditemId: context.query.useditemId,
		},
	);

	// 2. 요청받은 데이터를 페이지로 넘겨준다
	return {
		props: {
			// key : value
			fetchUseditem: result.fetchUseditem,
		},
	};
};
