import {
  Wrapper,
  PageWrapper,
  MapWrapper,
  ContentsWrapper,
  MapContentsWrapper,
  TopBar,
  IconX,
  IconY,
  IconSmile,
  ContentsBody,
  ProfileWrpper,
  Profile,
  Writer,
  Date,
  ProfileImg,
  Price,
  Wrp,
  Name,
  PriceWrapper,
} from "./BoardDetail.styles";
import DOMPurify from "dompurify";

export default function MarketBoardDetailUI(props) {
  return (
    <Wrapper>
      <PageWrapper>
        <TopBar>
          <IconSmile />
          <Name>{props.data?.fetchUseditem.name}</Name>
          <div>
            <IconX />
            <IconY />
          </div>
        </TopBar>
        <ContentsWrapper>
          <div
            style={{
              width: "250px",
              height: "250px",
              backgroundColor: "gray",
              backgroundImage: "url(/candy.jpeg)",
              backgroundSize: "cover",
              border: "2px solid gray",
            }}
          ></div>
          <ContentsBody>
            <ProfileWrpper>
              <Profile>
                <Wrp>
                  <ProfileImg />
                  <div>
                    <Writer>{props.data?.fetchUseditem.seller.name}</Writer>
                    <Date>{props.data?.fetchUseditem.createdAt.slice(0,10)}</Date>
                  </div>
                </Wrp>
                <Price></Price>
              </Profile>
            </ProfileWrpper>
            <PriceWrapper>
              {props.data?.fetchUseditem.price.toLocaleString()} 원
            </PriceWrapper>
            <ProfileWrpper>{props.data?.fetchUseditem.remarks}</ProfileWrpper>
            <ProfileWrpper>
              {process.browser && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      props.data?.fetchUseditem.contents
                    ),
                  }}
                ></div>
              )}
            </ProfileWrpper>
          </ContentsBody>
        </ContentsWrapper>
      </PageWrapper>
      {/* map */}
      <MapWrapper>
        <TopBar></TopBar>
        <MapContentsWrapper></MapContentsWrapper>
      </MapWrapper>
    </Wrapper>
  );
}
