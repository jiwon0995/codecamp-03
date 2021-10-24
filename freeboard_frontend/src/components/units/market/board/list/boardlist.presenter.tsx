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
  ListTitle,
  SearchBar,
  SearchDiv,
  Search,
  IconWrapper,
  Selling,
  Soldout,
} from "./boardlist.styles";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import BestProductPage from "../bestProduct/bestProduct";

export default function MarketBoardListUI(props: any) {
  return (
    <KingWrapper>
      <Window>
        <IconWrapper>
          <WindowIcon
            src={"/write98.png"}
            onClick={props.onClickMoveBoardWrite}
          />
          <div>Write</div>
        </IconWrapper>
      </Window>
      <BestProductPage />
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
            <Selling>
              <Soldout
                onClick={props.onClickSelling}
                isSoldout={props.isSoldout}
              >
                Selling
              </Soldout>
              <Soldout
                onClick={props.onClickSoldOut}
                isSoldout={props.isSoldout}
              >
                Sold Out
              </Soldout>
            </Selling>
            <SearchDiv>
              <Search>Search</Search>
              <SearchBar
                type="text"
                onChange={props.onchangeSearch}
              ></SearchBar>
            </SearchDiv>
            <MapWrapper>
              {props.data?.fetchUseditems && (
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
                      ) : (
                        <ImgX>NoneImage</ImgX>
                      )}
                      <ColumnBasic>{index}</ColumnBasic>
                      <ColumnBasic>
                        {el.name
                          .replaceAll(props.search, `#@${props.search}#@`)
                          .split("#@")
                          .map((el: any) => (
                            <div key={uuidv4()} isMatched={props.search === el}>
                              {el}
                            </div>
                          ))}
                      </ColumnBasic>
                      <ColumnBasic>{el.seller.name}</ColumnBasic>
                      <ColumnBasic>{el.remarks}</ColumnBasic>
                      <ColumnBasic>{el.price}</ColumnBasic>
                    </Row>
                  ))}
                </InfiniteScroll>
              )}
            </MapWrapper>
          </Body>
        </ListBody>
      </Wrapper>
    </KingWrapper>
  );
}
