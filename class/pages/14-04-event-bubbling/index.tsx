import { useQuery, gql } from '@apollo/client'
import style from '@emotion/styled'



const FETCH_BOARDS = gql`
  query fetchBoards($page:Int){
    fetchBoards(page:$page){
      _id
      writer
      title
      createdAt
    }
  }
`
const Page = style.span`
  margin: 10px
`
const Row = style.div`
  display: flex;
`
const Colunm2 = style.div`
  margin: 20px
`
export default function eventBubblingPage() { 
  const { data } = useQuery(FETCH_BOARDS)
  function onClickRow(event) { 
    alert("클릭!!!")
    alert(event.currentTarget.id)
  }
  
  return (
    <>
      <div>이벤트버블링</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <Row key={el._id} id={el._id} onClick={onClickRow}>
            <Colunm2>{el.writer}</Colunm2>
            <Colunm2>{el.title}</Colunm2>
            <Colunm2>{el.createdAt}</Colunm2>
          </Row>
        ))}
      </div>
    </>
  );
}