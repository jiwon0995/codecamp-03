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
  SliderImg,
  PicDiv,
  Label,
} from "./BoardDetail.styles";
import DOMPurify from "dompurify";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";


const SliderDiv = styled(Slider)`
  width: 250px;
  height: 257px;
  border-left: 3px solid #fff;
  border-top: 3px solid #fff;
  border-right: 3px solid #7f7f7f;
  border-bottom: 3px solid #7f7f7f;
`;

export default function MarketBoardDetailUI(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slide: "div",
    centerMode: false,
    autoplay: true,
    arrows: false,
  };

  return (
    <Wrapper>
      <PageWrapper>
        <TopBar>
          <div>
            <IconSmile />
            <Name>{props.data?.fetchUseditem.name}</Name>
          </div>
          <div>
            <IconX />
            <IconY />
          </div>
        </TopBar>
        <ContentsWrapper>
          <SliderDiv {...settings}>
            {props.data?.fetchUseditem.images.map((el: any) => (
              <div key={el}>
                <SliderImg src={`https://storage.googleapis.com/${el}`} />
              </div>
            ))}
          </SliderDiv>
          <ContentsBody>
            <Label>Seller</Label>
            <ProfileWrpper>
              <Profile>
                <ProfileImg />
                <div>
                  <Writer>{props.data?.fetchUseditem.seller.name}</Writer>
                  <Date>
                    {props.data?.fetchUseditem.createdAt.slice(0, 10)}
                  </Date>
                </div>
              </Profile>
              <PicDiv>
                <img src={"/h.ico"} style={{ width: "50px" }} />
                <div>{props.data?.fetchUseditem.pickedCount}</div>
              </PicDiv>
            </ProfileWrpper>
            <Label>Price</Label>
            <PriceWrapper>
              <img src={"/coin.gif"} style={{ width: "55px" }} />
              {props.data?.fetchUseditem.price.toLocaleString()} 원
            </PriceWrapper>
            <Label>Remarks</Label>
            <ProfileWrpper>{props.data?.fetchUseditem.remarks}</ProfileWrpper>
            <Label>Contents</Label>
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
        <TopBar>
          <IconSmile />
          <Name>Location</Name>
          <div>
            <IconX />
            <IconY />
          </div>
        </TopBar>
        <MapContentsWrapper></MapContentsWrapper>
      </MapWrapper>
    </Wrapper>
  );
}
