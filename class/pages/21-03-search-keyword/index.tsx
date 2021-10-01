import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;
const Wrapper = styled.div`
  border: 1px solid black;
`;
const Colunm = styled.span`
  padding: 0px 50px;
  /* border: 1px solid black; */
`;
const Page = styled.span`
  padding: 0px 10px;
  cursor: pointer;
`;
interface Iprops {
  isMatched: boolean;
}
const Myword = styled.span`
  color: ${(props: Iprops) => (props.isMatched ? "red" : "block")};
`;

export default function searchKeywordPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const [mySearch, setMySearch] = useState("");
  const [myKeyword, setMyKeyword] = useState("");

  function onChangeSearch(event) {
    setMySearch(event.target.value);
  }
  function onClickSearch() {
    refetch({ search: mySearch });
    setMyKeyword(mySearch);
  }
  function onClickPage(event) {
    refetch({ search: myKeyword, page: Number(event.target.id) });
  }
  console.log(myKeyword);

  return (
    <>
      <div>검색 페이지</div>
      검색어: <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색</button>
      {data?.fetchBoards.map((el) => (
        <Wrapper key={el._id}>
          <Colunm>{el.writer}</Colunm>
          <Colunm>
            {el.title
              .replaceAll(myKeyword, `#${myKeyword}#`)
              .split("#")
              .map((el) => (
                <Myword key={uuidv4()} isMatched={myKeyword === el}>
                  {el}
                </Myword>
              ))}
          </Colunm>
          <Colunm>{el.createdAt}</Colunm>
        </Wrapper>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <Page key={uuidv4()} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </Page>
      ))}
    </>
  );
}
