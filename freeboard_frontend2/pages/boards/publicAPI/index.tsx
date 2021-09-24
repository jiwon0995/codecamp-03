import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { WrapperWrapper } from '../../../src/components/units/board/write/BordWrite.styles';
import styled from '@emotion/styled'


const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 100px 20px 20px 20px;
`
const InputSearch = styled.input`
	width: 250px;
	height: 35px;
	margin-bottom: 20px;
`

export default function APIPage() {
	const [search, setSearch] = useState('세븐틴')
	const [list, setList] = useState();
	const inputRef = useRef<HTMLInputElement>()

	useEffect(() => {
		testFunc();
		console.log('실행');
	}, [search]);
	

	const testFunc = async () => {
		if (!search) return;
		const { data } = await axios.get(
			`https://dapi.kakao.com/v2/search/vclip?query=${search}`,
			{
				headers: {
					Authorization: 'KakaoAK dd68be79eae4dc32591b7d82a029e75b',
				},
			},
		);
		console.log(data);
		setList(data);
	}; 
	

	function onChangeSearch(event) {
		setSearch(inputRef.current.value);
	}	



	return (
		<WrapperWrapper>
			<InputWrapper>
				<InputSearch type="text" ref={inputRef} onChange={onChangeSearch}></InputSearch>
				{/* <button>검색!</button> */}
				{list && list.documents.map((data) => <ReactPlayer url={data.url}></ReactPlayer>)}
			</InputWrapper>
		</WrapperWrapper>
	);
}
