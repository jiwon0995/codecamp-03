import { useQuery, gql } from "@apollo/client";
import style from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;
const Page = style.span`
  margin: 10px
`;

export default function PagenationNextPage() {
  const [startPage, setstartPage] = useState(1)
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }
  function onClickNextPage() { 
    setstartPage(prev => prev+10)
  }
  function onClickPrevPage() { 
    setstartPage(prev=>prev-10)
  }

  return (
    <>
      <div> 페이지네이션(다음페이지) </div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>{el.title}</div>
        ))}
      </div>
      <br />
      <span onClick={onClickPrevPage}>이전</span>
      {/* 리팩토링 */}
      {new Array(10).fill(1).map((_, index) => (
        <Page
          key={startPage + index}
          onClick={onClickPage}
          id={String(startPage + index)}
        >
          {startPage + index}
        </Page>
      ))}
      {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
        <Page
          key={startPage + index}
          onClick={onClickPage}
          id={String(startPage + index)}
        >
          {startPage + index}
        </Page>
      ))} */}
      <span onClick={onClickNextPage}>다음</span>
    </>
  );
}
