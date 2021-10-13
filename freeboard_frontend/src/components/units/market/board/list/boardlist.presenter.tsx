import {
  Wrapper,
  ListBody,
  ListTop,
  IconX,
  IconY,
  Title,
  Body,
  Window,
  WindowIcon,
  KingWrapper,
  Row,
  ColumnBasic,
  MapWrapper,
} from "./boardlist.styles";


export default function MarketBoardListUI(props) { 

  return (
    <KingWrapper>
      <Window>
        <WindowIcon
          src={"/write98.png"}
          onClick={props.onClickMoveBoardWrite}
        />
      </Window>
      <Wrapper>
        <ListBody>
          <ListTop>
            <Title>Market List</Title>
            <div>
              <IconX />
              <IconY />
            </div>
          </ListTop>
          <Body>
            <MapWrapper>
              {props.data?.fetchUseditems.map((el, index) => (
                <Row key={el._id} id={el._id}>
                  <ColumnBasic>{10 - index}</ColumnBasic>
                  <ColumnBasic>{el.name}</ColumnBasic>
                  <ColumnBasic>{el.seller.name}</ColumnBasic>
                  <ColumnBasic>{el.remarks}</ColumnBasic>
                  <ColumnBasic>{el.price}</ColumnBasic>
                </Row>
              ))}
            </MapWrapper>
          </Body>
        </ListBody>
      </Wrapper>
    </KingWrapper>
  );
}