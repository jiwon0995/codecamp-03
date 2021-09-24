import { gql, useQuery } from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroller';


const FETCH_BOARD = gql`
  query fetchBoards($page:Int){
    fetchBoards(page:$page){
      _id
      writer
      contents
      title
    }
  }
` 

export default function infinitySrcollerPage() { 
  const { data, fetchMore } = useQuery(FETCH_BOARD)
  function onLodeMore() { 
    if (!data) return
    
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {  
        return {
          fetchBoards:[...prev.fetchBoards, ...fetchMoreResult.fetchBoards]
        }
      }
    })
  }
  return (
    <InfiniteScroll pageStart={0} loadMore={onLodeMore} hasMore={true}>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contnets}</span>
        </div>
      ))}
    </InfiniteScroll>
  );
}