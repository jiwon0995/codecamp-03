import Slider from "react-slick";
import styled from "@emotion/styled";

const SliderDiv = styled.div`
  width: 250px;
  height: 250px;

`

export default function Slider01(props:any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <SliderDiv>
        <img/>
      </SliderDiv>
    </Slider>
  );
}
