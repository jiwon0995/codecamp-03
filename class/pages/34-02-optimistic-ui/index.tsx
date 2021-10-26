import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation(LIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "613437ccabd89b00293adfdc" },
  });

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: "613437ccabd89b00293adfdc" },
      //  리패치 될 때 까지 기다려야함
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "613437ccabd89b00293adfdc" },
      //   },
      // ],
      optimisticResponse: {
        likeBoard: data?.fetchBoard.likeCount +1
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "613437ccabd89b00293adfdc" },
          data: {
            fetchBoard: {
              _id: "613437ccabd89b00293adfdc",
              __typename: "Board",
              likeCount: data.likeBoard,
            }
          }
        });
      }
    });
  };

  return (
    <>
      <div>좋아요 개수: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 올리기!</button>
    </>
  );
}
