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
  ColumnImg,
  ImgX,
} from "./boardlist.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function MarketBoardListUI(props: any) {
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
              <InfiniteScroll
                pageStart={0}
                loadMore={props.onLoadeMore}
                hasMore={true}
                useWindow={false}
              >
                {props.data?.fetchUseditems.map((el: any, index: any) => (
                  <Row
                    key={index}
                    id={el._id}
                    onClick={props.onClickMoveDetail}
                  >
                    {el.images[0] ? (
                      <ColumnImg
                        src={`https://storage.googleapis.com/${el.images[0]}`}
                      />
                    ):<ImgX>NoneImage</ImgX>}
                    <ColumnBasic>{index}</ColumnBasic>
                    <ColumnBasic>{el.name}</ColumnBasic>
                    <ColumnBasic>{el.seller.name}</ColumnBasic>
                    <ColumnBasic>{el.remarks}</ColumnBasic>
                    <ColumnBasic>{el.price}</ColumnBasic>
                  </Row>
                ))}
              </InfiniteScroll>
            </MapWrapper>
          </Body>
        </ListBody>
      </Wrapper>
    </KingWrapper>
  );
}
