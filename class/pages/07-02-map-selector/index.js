import { gql, useMutation, useQuery } from '@apollo/client'
import styled from '@emotion/styled'


const FETCH_BOARD = gql`
query {
  fetchBoards{
    number
    writer
    title
    contents
    createdAt
  }
}

`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px black;
`

const Column = styled.div`
  width: 20%;
  margin: 10px;
`
const DELETE_BOARD = gql`
  mutation deleteBoard($number:Int){
    deleteBoard(number:$number){
		message
  }
}
`



export default function MapSelectorPage() { 
  const [deletBoard] = useMutation(DELETE_BOARD)
  const { data } = useQuery(FETCH_BOARD)
  
  async function onClickDelete(event) { 
    await deletBoard({
      variables: { number: Number(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARD }]
    })
  }
  
  return (
    <div>
      {/* JSX */}
      {data?.fetchBoards.map((el, index) => (
        <Row key={el.number}> //key는 구별가능한 개별적인 것으로..
          <Column><input type="checkbox" /></Column>
          <Column> {index}</Column>
          <Column> {el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.createdAt}</Column>
          <Column>
            <button id={el.number} onClick={onClickDelete}>삭제하기</button>
          </Column>
        </Row>
      ))}
    </div>
  )
}  