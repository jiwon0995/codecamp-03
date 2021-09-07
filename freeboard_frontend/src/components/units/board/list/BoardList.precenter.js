import { Column, Row, Wrapper} from '../../board/list/BoardList.styles'


export default function BoardListUI(props) { 

  return (
    <Wrapper>
      <Row>
        <Column>번호</Column>
        <Column>제목</Column>
        <Column>직상자</Column>
        <Column>날짜</Column>
      </Row>
        {/* <Row>
          <Column>{props.data?.fetchBoards.createdAt}</Column>
        <Column>{props.data?.fetchBoards.title}</Column>
        <Column>{props.data?.fetchBoards.writer}</Column>
        <Column>{props.data?.fetchBoards.createdAt}</Column>
        </Row> */}
      
      {props.data?.fetchBoards.map((el,index) => (
        <Row key={el._id}>
          <Column>{index+1}</Column>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.createdAt}</Column>
        </Row>
      ))}
    </Wrapper>
  )
}