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
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount{
    fetchBoardsCount
  }
`
export default function PagenationNextPage() {
  const [startPage, setstartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  
  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }
  function onClickNextPage() {
    if(startPage+10 > lastPage) return
    setstartPage((prev) => prev + 10);
  }

  function onClickPrevPage() {
    if (startPage === 1) return
    setstartPage((prev) => prev - 10);
  }

  return (
    <>
      <div> 페이지네이션(마지막페이지) </div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>{el.title}</div>
        ))}
      </div>
      <br />
      <span onClick={onClickPrevPage}>이전</span>
      {/* 리팩토링 */}
      {new Array(10).fill(1).map(
        (_, index) => 
          (startPage + index <= lastPage &&
          (<Page
            key={startPage + index}
            onClick={onClickPage}
            id={String(startPage + index)}
          >
            {startPage + index}
          </Page>
          ))
        )}
      <span onClick={onClickNextPage}>다음</span>
    </>
  );
}
